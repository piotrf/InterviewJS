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

  ## Unique input

  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <TextInput input placeholder="Placeholder…" />
        <CharacterCount>140</CharacterCount>
        <Legend>i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <TextInput area placeholder="Placeholder…" />
        <CharacterCount>140</CharacterCount>
        <Legend>i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}

  ## Multiple inputs

  ${(
    <ReactSpecimen>
      <FormItem>
        <Label>Label</Label>
        <Container flex>
          <Container basis={3}>
            <TextInput input placeholder="Placeholder…" place="left" />
            <CharacterCount>140</CharacterCount>
          </Container>
          <Container basis={3}>
            <TextInput input placeholder="Placeholder…" place="middle" />
            <CharacterCount>140</CharacterCount>
          </Container>
          <Container basis={3}>
            <TextInput input placeholder="Placeholder…" place="right" />
            <CharacterCount>140</CharacterCount>
          </Container>
        </Container>
        <Legend>i</Legend>
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <FormItem>
        <Label>Label</Label>
        <Container flex>
          <Container basis={2}>
            <TextInput area placeholder="Placeholder…" place="left" />
            <CharacterCount>140</CharacterCount>
          </Container>
          <Container basis={4}>
            <TextInput area placeholder="Placeholder…" place="middle" />
            <CharacterCount>140</CharacterCount>
          </Container>
          <Container basis={4}>
            <TextInput area placeholder="Placeholder…" place="right" />
            <CharacterCount>140</CharacterCount>
          </Container>
        </Container>
      </FormItem>
    </ReactSpecimen>
  )}

`;
