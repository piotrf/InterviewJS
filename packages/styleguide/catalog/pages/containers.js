import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Container } from "../components";

export default () => markdown`

  ## Fill containers

  ${(
    <ReactSpecimen span={2}>
      <Container fill="white">White</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Container fill="grey">Grey</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Container fill="black">Black</Container>
    </ReactSpecimen>
  )}

  ## Effect containers

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
  ${(
    <ReactSpecimen span={3}>
      <Container rounded>Rounded</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Container padded>Padded</Container>
    </ReactSpecimen>
  )}

  ## Align containers

  ${(
    <ReactSpecimen span={2}>
      <Container align="left">left</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Container align="center">center</Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Container align="right">right</Container>
    </ReactSpecimen>
  )}

  ## Flex containers

  ${(
    <ReactSpecimen span={3}>
      <Container flex="row">
        <Container basis="2">100/2</Container>
        <Container basis="4" align="center">
          100/4
        </Container>
        <Container basis="4" align="right">
          100/4
        </Container>
      </Container>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Container flex="column">
        <Container basis="2">100/2</Container>
        <Container basis="4">100/4</Container>
        <Container basis="4">100/4</Container>
      </Container>
    </ReactSpecimen>
  )}

  ## Limit container

  ${(
    <ReactSpecimen responsive>
      <Container fill="white" limit>
        Limit container has set a max-width
      </Container>
    </ReactSpecimen>
  )}

  ## Cover container

  ${(
    <ReactSpecimen>
      <Container fill="white" cover>
        Cover container takes window height
      </Container>
    </ReactSpecimen>
  )}
`;
