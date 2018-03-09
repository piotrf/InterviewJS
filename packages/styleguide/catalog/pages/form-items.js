import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import {
  CharacterCount,
  Container,
  FormItem,
  Label,
  Legend,
  TextInput
} from "../components";

export default () => markdown`

  ## Unique inputs

  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <CharacterCount>140</CharacterCount>
        <TextInput input placeholder="Placeholder…" />
        <Legend tip="tip">i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <CharacterCount>140</CharacterCount>
        <TextInput area placeholder="Placeholder…" />
        <Legend tip="tip">i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}

  ## Multiple inputs

  ${(
    <ReactSpecimen>
      <FormItem>
        <Label>Label</Label>
        <Container dir="row">
          <Container flex={[0, 0, `${100 / 2}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput input placeholder="Placeholder…" place="left" />
          </Container>
          <Container flex={[0, 0, `${100 / 4}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput input placeholder="Placeholder…" place="middle" />
          </Container>
          <Container flex={[0, 0, `${100 / 4}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput input placeholder="Placeholder…" place="right" />
          </Container>
        </Container>
        <Legend tip="tip">i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <FormItem>
        <Label>Label</Label>
        <Container dir="row">
          <Container flex={[0, 0, `${100 / 3}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput area placeholder="Placeholder…" place="left" />
          </Container>
          <Container flex={[0, 0, `${100 / 3}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput area placeholder="Placeholder…" place="middle" />
          </Container>
          <Container flex={[0, 0, `${100 / 3}%`]}>
            <CharacterCount>140</CharacterCount>
            <TextInput area placeholder="Placeholder…" place="right" />
          </Container>
        </Container>
      </FormItem>
    </ReactSpecimen>
  )}

`;
