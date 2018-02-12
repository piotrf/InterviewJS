import React from "react";

import {
  CharacterCount,
  Container,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "../../components";

export default class StoryDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>140</CharacterCount>
          <TextInput input placeholder="Placeholder…" />
          <Legend tip="This is a title">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
        <FormItem>
          <Label>Byline</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>140</CharacterCount>
              <TextInput input placeholder="Author’s name" place="left" />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>140</CharacterCount>
              <TextInput input placeholder="Link…" place="middle" />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>140</CharacterCount>
              <TextInput input placeholder="Publication date…" place="right" />
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
                placeholder="Cover photo"
                place="left"
                type="file"
              />
            </Container>
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                nooffset
                place="right"
                placeholder="Custom logo"
                type="file"
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
        <Separator size="m" effect="silent" />
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
        <input type="submit" hidden />
      </Form>
    );
  }
}

StoryDetailsForm.propTypes = {};

StoryDetailsForm.defaultProps = {};
