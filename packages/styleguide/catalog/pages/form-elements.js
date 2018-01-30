import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { CharacterCount, Form, Label, TextInput } from "../components";

export default () => markdown`

  ## Form

  ${(
    <ReactSpecimen>
      <Form>This is a form</Form>
    </ReactSpecimen>
  )}

  ## Text Inputs

  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="text" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="email" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="number" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="date" placeholder="Placeholder text…" />
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

  ## Add-ons

  ${(
    <ReactSpecimen>
      <CharacterCount>50</CharacterCount>
    </ReactSpecimen>
  )}

`;
