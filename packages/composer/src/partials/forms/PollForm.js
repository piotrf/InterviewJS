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

export default class PollForm extends React.Component {
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
        PollForm goes here
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

PollForm.propTypes = {
  cta: string,
  handleSave: func,
  handleSubmit: func.isRequired,
  story: shape({
    context: string,
    intro: string
  })
};

PollForm.defaultProps = {
  cta: "Save",
  handleSave: null,
  story: {
    context: "",
    intro: ""
  }
};
