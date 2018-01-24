import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Container } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen>
      <Container white>White</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container grey>Grey</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container shift>Shift</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container inset>Inset</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container rounded>Rounded</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container padded>Padded</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Container grey shift padded rounded>
        Combination of a few
      </Container>
    </ReactSpecimen>
  )}
`;
