import { func } from "prop-types";
import React from "react";

import {
  Action,
  Actionbar,
  CharacterCount,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";

export default class StoryDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Label>Intro</Label>
          <CharacterCount>280</CharacterCount>
          <TextInput
            area
            placeholder="Best to start with something like ‘Find out how…’, ‘Investigate…’, ‘Learn…’"
          />
          <Legend tip="This is a title">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <FormItem>
          <Label>Context</Label>
          <CharacterCount>280</CharacterCount>
          <TextInput
            area
            placeholder="This text helps the reader understand what the interviews are about…"
          />
          <Legend tip="This is a title">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <Actionbar>
          <Action fixed onClick={this.props.handleCancel} secondary>
            Cancel
          </Action>
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

StoryDetailsForm.propTypes = {
  handleCancel: func.isRequired,
  handleSubmit: func.isRequired
};

StoryDetailsForm.defaultProps = {};
