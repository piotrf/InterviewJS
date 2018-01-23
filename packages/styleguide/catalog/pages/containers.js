import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Container } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen span={3}>
      <Container white>White</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Container grey>Grey</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Container shift>Shift</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Container inset>Inset</Container>
    </ReactSpecimen>
  )}
`;
