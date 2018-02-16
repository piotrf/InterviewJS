import { func, shape, string } from "prop-types";
import React from "react";

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

export default class IntervieweesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        interviewees: this.props.story.interviewees
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        Interviewees form
        <Actionbar>
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

IntervieweesForm.propTypes = {
  handleSubmit: func.isRequired,
  story: shape({
    context: string,
    intro: string
  })
};

IntervieweesForm.defaultProps = {
  story: {
    context: "",
    intro: ""
  }
};

IntervieweesForm.defaultProps = {};
