import React from "react";
import { func, shape, string } from "prop-types";

import {
  Actionbar,
  Action,
  CharacterCount,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";

import validateField from "./validateField";

export default class DetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        intro: this.props.story.intro,
        context: this.props.story.context
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
          <Label>Intro</Label>
          <CharacterCount>
            {280 - this.state.formData.intro.length}
          </CharacterCount>
          <TextInput
            area
            maxLength="280"
            name="intro"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="Best to start with something like ‘Find out how…’, ‘Investigate…’, ‘Learn…’"
            value={this.state.formData.intro}
          />
          <Legend tip="This is a tip">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Context</Label>
          <CharacterCount>
            {1000 - this.state.formData.context.length}
          </CharacterCount>
          <TextInput
            area
            maxLength="1000"
            name="context"
            onBlur={(e) => this.handleBlur(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="This text helps the reader understand what the interviews are about…"
            value={this.state.formData.context}
          />
          <Legend tip="This is a tip">i</Legend>
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

DetailsForm.propTypes = {
  cta: string,
  handleSave: func,
  handleSubmit: func.isRequired,
  story: shape({
    context: string,
    intro: string
  })
};

DetailsForm.defaultProps = {
  cta: "Save",
  handleSave: null,
  story: {
    context: "",
    intro: ""
  }
};
