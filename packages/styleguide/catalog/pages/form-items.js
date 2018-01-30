import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Container, Label, TextInput, FormItem } from "../components";

export default () => markdown`

  ## Unique input

  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <TextInput input />
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <FormItem>
        <Label>Label</Label>
        <TextInput area />
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
            <TextInput input place="left" />
          </Container>
          <Container basis={3}>
            <TextInput input place="middle" />
          </Container>
          <Container basis={3}>
            <TextInput input place="right" />
          </Container>
        </Container>
      </FormItem>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <FormItem>
        <Label>Label</Label>
        <Container flex>
          <Container basis={2}>
            <TextInput area place="left" />
          </Container>
          <Container basis={4}>
            <TextInput area place="middle" />
          </Container>
          <Container basis={4}>
            <TextInput area place="right" />
          </Container>
        </Container>
      </FormItem>
    </ReactSpecimen>
  )}

`;
