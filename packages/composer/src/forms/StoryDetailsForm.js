import { func, shape, string } from "prop-types";
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
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        intro: this.props.story.intro,
        context: this.props.story.context
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
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Label>Intro</Label>
          <CharacterCount>
            {280 - this.state.formData.intro.length}
          </CharacterCount>
          <TextInput
            area
            maxlength="280"
            name="intro"
            onChange={e => this.handleInput(e)}
            placeholder="Best to start with something like ‘Find out how…’, ‘Investigate…’, ‘Learn…’"
            value={this.state.formData.intro}
          />
          <Legend tip="This is a tip">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <FormItem>
          <Label>Context</Label>
          <CharacterCount>
            {280 - this.state.formData.context.length}
          </CharacterCount>
          <TextInput
            area
            maxlength="280"
            name="context"
            onChange={e => this.handleInput(e)}
            placeholder="This text helps the reader understand what the interviews are about…"
            value={this.state.formData.context}
          />
          <Legend tip="This is a tip">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <Actionbar>
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

StoryDetailsForm.propTypes = {
  handleSubmit: func.isRequired,
  story: shape({
    context: string,
    intro: string
  })
};

StoryDetailsForm.defaultProps = {
  story: {
    context: "",
    intro: ""
  }
};

StoryDetailsForm.defaultProps = {};
