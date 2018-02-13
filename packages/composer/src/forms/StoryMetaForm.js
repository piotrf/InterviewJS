import React from "react";
import { func } from "prop-types";

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

export default class StoryMetaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        byName: "",
        byLink: "",
        pubDate: "",
        title: ""
      }
    };
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
          <Label>Title</Label>
          <CharacterCount>
            {140 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxlength="140"
            name="title"
            onChange={e => this.handleInput(e)}
            placeholder="Placeholder…"
            required
          />
          <Legend tip="This is a title">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <FormItem>
          <Label>Byline</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {70 - this.state.formData.byName.length}
              </CharacterCount>
              <TextInput
                input
                maxlength="70"
                name="byName"
                onChange={e => this.handleInput(e)}
                place="left"
                placeholder="Author’s name"
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <TextInput
                input
                name="byLink"
                onChange={e => this.handleInput(e)}
                place="middle"
                placeholder="Link…"
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {70 - this.state.formData.pubDate.length}
              </CharacterCount>
              <TextInput
                input
                maxlength="70"
                name="pubDate"
                onChange={e => this.handleInput(e)}
                place="right"
                placeholder="Publication date…"
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <FormItem>
          <Label>Imagery</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                onChange={e => this.handleInput(e)}
                place="left"
                placeholder="Cover photo"
                type="file"
              />
            </Container>
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                nooffset
                onChange={e => this.handleInput(e)}
                place="right"
                placeholder="Custom logo"
                type="file"
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
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

StoryMetaForm.propTypes = {
  handleCancel: func.isRequired,
  handleSubmit: func.isRequired
};

StoryMetaForm.defaultProps = {};
