import React from "react";
import { func, object, shape, string } from "prop-types";

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
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>
            {70 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxLength="70"
            minLength="5"
            name="title"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="Placeholder…"
            required
            valid={this.state.formValidation.title}
            value={this.state.formData.title}
          />
          <Legend tip="This is a title">i</Legend>
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
                placeholder="Link…"
                value={this.state.formData.authorLink}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {35 - this.state.formData.pubDate.length}
              </CharacterCount>
              <TextInput
                input
                maxLength="35"
                name="pubDate"
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="right"
                placeholder="Publication date…"
                value={this.state.formData.pubDate}
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Imagery</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                name="cover"
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="left"
                placeholder="Cover photo"
                type="file"
                value={this.state.formData.cover}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                name="logo"
                nooffset
                onBlur={(e) => this.handleBlur(e)}
                onChange={(e) => this.handleChange(e)}
                place="right"
                placeholder="Custom logo"
                type="file"
                value={this.state.formData.logo}
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
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
      cover: undefined,
      logo: undefined
    }
  }
};
