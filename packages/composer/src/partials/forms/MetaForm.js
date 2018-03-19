import React from "react";
import { func, object, shape, string } from "prop-types";
import Dropzone from "react-dropzone";

import {
  Actionbar,
  Action,
  CharacterCount,
  Container,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";

import validateField from "./validateField";

export default class MetaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        ...this.props.story,
        author: this.props.story.author,
        authorLink: this.props.story.authorLink,
        cover: this.props.story.cover,
        logo: this.props.story.logo,
        pubDate: this.props.story.pubDate,
        title: this.props.story.title
      },
      formValidation: {
        title: null
      }
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
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
    return this.props.handleSave && validateField(target)
      ? this.props.handleSave({ [name]: this.state.formData[name] })
      : null;
  }

  handleChange(e) {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  }

  handleFile(key, f) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result.length > 3e6 ? '' : reader.result;
      // console.log(base64data);
      this.setState({
        formData: { ...this.state.formData, [key]: base64data }
      });
    };
    reader.readAsDataURL(f[0]);
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>
            {60 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxLength="60"
            minLength="5"
            name="title"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="Make it short and simple!"
            required
            valid={this.state.formValidation.title}
            value={this.state.formData.title}
          />
          <Legend tip="Short and simple titles work best.">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Byline</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {35 - this.state.formData.author.length}
              </CharacterCount>
              <TextInput
                input
                maxLength="35"
                name="author"
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="left"
                placeholder="Author’s name"
                value={this.state.formData.author}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <TextInput
                input
                name="authorLink"
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="middle"
                placeholder="Link"
                value={this.state.formData.authorLink}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <TextInput
                input
                maxLength="35"
                name="pubDate"
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="right"
                placeholder="Date of publication"
                value={this.state.formData.pubDate}
              />
            </Container>
          </Container>
          <Legend
            tip="- Add the author’s name.<br />
            - Add a link e.g. to your website.<br />
            - Add the publication date: Day/ Month/ Year"
          >
            i
          </Legend>
        </FormItem>
        <Separator size="m" silent />
        <Container dir="row">
          <Container flex={[1, 1, "50%"]}>
            <FormItem>
              <Label>Cover photo</Label>
              <Dropzone
                accept="image/jpeg, image/jpg, image/svg, image/gif, image/png"
                ref={(node) => {
                  this.dropzoneRef = node;
                }}
                onDrop={(accepted, rejected) => {
                  this.handleFile("cover", accepted);
                }}
                style={{ display: "none" }}
              >
                <p>Drop file here</p>
              </Dropzone>
              <TextInput
                file
                place="left"
                onClick={() => {
                  this.dropzoneRef.open();
                }}
              />
              <Legend
                tip="Choose a photo if you want a “front page” but make sure
                you have the copyright!"
              >
                i
              </Legend>
            </FormItem>
          </Container>
          <Container flex={[1, 1, "50%"]}>
            <FormItem>
              <Label>Your logo</Label>
              <Dropzone
                accept="image/jpeg, image/jpg, image/svg, image/gif, image/png"
                ref={(node) => {
                  this.dropzoneRef = node;
                }}
                onDrop={(accepted, rejected) => {
                  this.handleFile("logo", accepted);
                }}
                style={{ display: "none" }}
              >
                <p>Drop file here</p>
              </Dropzone>
              <TextInput
                file
                place="right"
                onClick={() => {
                  this.dropzoneRef.open();
                }}
              />
              <Legend tip="Add your organisation’s logo">i</Legend>
            </FormItem>
          </Container>
        </Container>
        <Separator size="m" silent />
        <Actionbar>
          <Action fixed primary type="submit">
            {this.props.cta}
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

MetaForm.propTypes = {
  cta: string,
  handleSave: func,
  handleSubmit: func.isRequired,
  story: shape({
    title: string,
    author: string,
    authorLink: string,
    pubDate: string,
    media: object
  })
};

MetaForm.defaultProps = {
  cta: "Save",
  handleSave: null,
  story: {
    title: "",
    author: "",
    authorLink: "",
    pubDate: "",
    media: {
      cover: "undefined",
      logo: "undefined"
    }
  }
};
