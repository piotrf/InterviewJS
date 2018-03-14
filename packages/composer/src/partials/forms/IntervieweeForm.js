import React, { Component } from "react";
import { bool, func, shape, string } from "prop-types";
import Dropzone from "react-dropzone";

import {
  Action,
  Actionbar,
  CharacterCount,
  Container,
  Dropdown,
  DropdownContent,
  Form,
  FormItem,
  Icon,
  Label,
  Legend,
  PageParagraph,
  PageSubtitle,
  Separator,
  TextInput,
  Tip
} from "interviewjs-styleguide";

import validateField from "./validateField";

export default class IntervieweeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.interviewee,
      formValidation: {
        name: null,
        title: null
      },
      moreDropdown: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteInterviewee = this.deleteInterviewee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }

  handleChange(e) {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  }

  handleFile(f) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      console.log(base64data);
      this.setState({
        formData: { ...this.state.formData, avatar: base64data }
      });
    }
    reader.readAsDataURL(f[0]);
  }

  handleBlur(e) {
    const { target } = e;
    const { name } = target;
    this.setState({
      formValidation: {
        ...this.state.formValidation,
        [name]: validateField(target)
      }
    });
  }

  toggleDropdown(dropdown, e) {
    if (e) e.preventDefault();
    this.setState({ [dropdown]: !this.state[dropdown] });
  }

  deleteInterviewee() {
    this.props.deleteInterviewee();
    this.setState({ moreDropdown: false });
    this.props.handleCancel(); // TODO used to close the parent modal, rename to something like `handleClose`, `handleCancel` is confusing.
  }

  render() {
    const deleteOption = (
      <Dropdown
        html={
          <DropdownContent>
            <PageSubtitle typo="p4">
              Sure to delete this interviewee permanently?
            </PageSubtitle>
            <Separator silent size="x" />
            <PageParagraph typo="p5">
              All related data including transcript and storyline will be
              irreversibly lost.
            </PageParagraph>
            <Separator silent size="x" />
            <Actionbar>
              <Action onClick={() => this.toggleDropdown("moreDropdown")}>
                Cancel
              </Action>
              <Action tone="negative" onClick={this.deleteInterviewee}>
                Delete
              </Action>
            </Actionbar>
          </DropdownContent>
        }
        onRequestClose={() => this.toggleDropdown("moreDropdown")}
        open={this.state.moreDropdown}
        position="left"
      >
        <Tip position="bottom" title="Delete interviewee">
          <Action
            iconic
            onClick={(e) => this.toggleDropdown("moreDropdown", e)}
            secondary
            tone="negative"
          >
            <Icon name="remove-persona" />
          </Action>
        </Tip>
      </Dropdown>
    );
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem>
          <Label>Name</Label>
          <TextInput
            input
            maxLength="50"
            minLength="1"
            name="name"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="i.e. Barack Obama"
            required
            valid={this.state.formValidation.name}
            value={this.state.formData.name}
          />
          <CharacterCount>
            {50 - this.state.formData.name.length}
          </CharacterCount>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>
            {60 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxLength="60"
            minLength="1"
            name="title"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="i.e. 44th President of the US"
            required
            valid={this.state.formValidation.title}
            value={this.state.formData.title}
          />
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Bio</Label>
          <CharacterCount>
            {500 - this.state.formData.bio.length}
          </CharacterCount>
          <TextInput
            area
            maxLength="500"
            name="bio"
            onChange={(e) => this.handleChange(e)}
            placeholder=""
            value={this.state.formData.bio}
          />
        </FormItem>
        <Separator size="m" silent />
        <Container dir="row">
          <Container flex={[0, 0, "50%"]}>
            <FormItem>
              <Label>Avatar</Label>
              <Dropzone
                accept="image/jpeg, image/jpg, image/svg, image/gif, image/png"
                ref={(node) => { this.dropzoneRef = node; }}
                onDrop={(accepted, rejected) => { this.handleFile(accepted) }}
                style={{display: 'none'}}>
                <p>Drop file here</p>
              </Dropzone>
              <button type="button" onClick={() => { this.dropzoneRef.open() }}>
                Open File Dialog
              </button>

              <Legend tip="Small profile pic for you interviewee, best to upload a photo in square format. JPG or PNG format.">
                i
              </Legend>
            </FormItem>
          </Container>
          <Container flex={[0, 0, "50%"]}>
            <FormItem>
              <Label>Color</Label>
              <TextInput
                input
                maxLength="7"
                minlength="3"
                name="color"
                nooffset
                onChange={(e) => this.handleChange(e)}
                place="right"
                placeholder="i.e. #495abd, red…"
                value={this.state.formData.color}
              />
              <Legend tip="Provide hex colour to customise interviewee’s speech bubbles.">
                i
              </Legend>
            </FormItem>
          </Container>
        </Container>
        <Separator size="m" silent />
        <Actionbar
          satellite={this.props.allowDelete ? "right" : null} // this goes inline with deleteOption
        >
          {!this.props.persistent ? (
            <Action fixed secondary onClick={this.props.handleCancel}>
              Cancel
            </Action>
          ) : null}
          <Action fixed primary type="submit">
            Save
          </Action>
          {this.props.allowDelete
            ? deleteOption
            : null /* this goes inline with satellite={this.props.deleteInterviewee === !null */}
        </Actionbar>
      </Form>
    );
  }
}

IntervieweeForm.propTypes = {
  allowDelete: bool,
  handleCancel: func,
  deleteInterviewee: func,
  handleSubmit: func.isRequired,
  persistent: bool,
  interviewee: shape({
    avatar: string,
    bio: string,
    color: string,
    name: string,
    title: string
  })
};

IntervieweeForm.defaultProps = {
  allowDelete: false,
  handleCancel: null,
  deleteInterviewee: null,
  interviewee: {
    avatar: "",
    bio: "",
    color: "",
    name: "",
    title: ""
  },
  persistent: false
};
