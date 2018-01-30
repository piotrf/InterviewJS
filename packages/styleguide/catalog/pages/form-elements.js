import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Form, Label, TextInput } from "../components";

export default () => markdown`

  ## Form

  ${(
    <ReactSpecimen>
      <Form>This is a form</Form>
    </ReactSpecimen>
  )}

  ## Text Inputs

  ${(
    <ReactSpecimen>
      <TextInput input placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <TextInput area placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}

  ## Text Inputs

  ${(
    <ReactSpecimen>
      <Label>Input label</Label>
    </ReactSpecimen>
  )}

`;
