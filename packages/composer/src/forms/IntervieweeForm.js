import React, { Component } from "react";
import { bool, func, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  CharacterCount,
  Container,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";

export default class IntervieweeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        avatar: this.props.interviewee.avatar,
        bio: this.props.interviewee.bio,
        color: this.props.interviewee.color,
        name: this.props.interviewee.name,
        title: this.props.interviewee.title
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }
  handleInput(e) {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  }
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem>
          <Label>Name</Label>
          <CharacterCount>
            {50 - this.state.formData.name.length}
          </CharacterCount>
          <TextInput
            input
            maxlength="50"
            name="name"
            onChange={(e) => this.handleInput(e)}
            placeholder="i.e. Barack Obama"
            required
            value={this.state.formData.name}
          />
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>
            {50 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxlength="50"
            name="title"
            onChange={(e) => this.handleInput(e)}
            placeholder="i.e. 44th President of the US"
            required
            value={this.state.formData.title}
          />
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Bio</Label>
          <CharacterCount>
            {280 - this.state.formData.bio.length}
          </CharacterCount>
          <TextInput
            area
            maxlength="280"
            name="bio"
            onChange={(e) => this.handleInput(e)}
            placeholder=""
            value={this.state.formData.bio}
          />
        </FormItem>
        <Separator size="m" silent />
        <Container dir="row">
          <Container flex={[0, 0, "50%"]}>
            <FormItem>
              <Label>Avatar</Label>
              <TextInput
                input
                name="avatar"
                onChange={(e) => this.handleInput(e)}
                place="left"
                placeholder=""
                type="file"
                value={this.state.formData.avatar}
              />
              <Legend tip="Small profile pic for you interviewee, best to upload a photo in square format.">
                i
              </Legend>
            </FormItem>
          </Container>
          <Container flex={[0, 0, "50%"]}>
            <FormItem>
              <Label>Color</Label>
              <TextInput
                input
                name="color"
                nooffset
                onChange={(e) => this.handleInput(e)}
                place="right"
                placeholder="#495abd"
                value={this.state.formData.color}
              />
              <Legend tip="Provide hex colour to customise interviewee’s speech bubbles.">
                i
              </Legend>
            </FormItem>
          </Container>
        </Container>
        <Separator size="m" silent />
        <Actionbar>
          {!this.props.persistent ? (
            <Action fixed secondary onClick={this.props.handleCancel}>
              Cancel
            </Action>
          ) : null}
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

IntervieweeForm.propTypes = {
  handleCancel: func,
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
  handleCancel: null,
  interviewee: {
    avatar: "",
    bio: "",
    color: "",
    name: "",
    title: ""
  },
  persistent: false
};
