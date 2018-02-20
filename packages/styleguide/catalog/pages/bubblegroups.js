import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import {
  Avatar,
  Bubble,
  Bubbles,
  BubbleGroup,
  Container,
  Icon
} from "../components";

import SampleAvatar from "../static/avatar.png";

export default () => markdown`

  ## BubbleGroups w/ side bubbles

  ${(
    <ReactSpecimen>
      <BubbleGroup>
        <Bubbles persona="interviewee">
          <Bubble persona="interviewee">Bubble from the left</Bubble>
          <Bubble persona="interviewee">Another bubble from the left</Bubble>
        </Bubbles>
      </BubbleGroup>
      <BubbleGroup>
        <Bubbles persona="system">
          <Bubble persona="system">Bubble in the middle</Bubble>
          <Bubble persona="system">Another bubble in the middle</Bubble>
        </Bubbles>
      </BubbleGroup>
      <BubbleGroup>
        <Bubbles persona="user">
          <Bubble persona="user">Bubble from the right</Bubble>
          <Bubble persona="user">Another bubble from the right</Bubble>
        </Bubbles>
      </BubbleGroup>
    </ReactSpecimen>
  )}

  ## BubbleGroups w/ actionable bubbles

  ${(
    <ReactSpecimen dark>
      <BubbleGroup>
        <Bubbles persona="system">
          <Bubble persona="system" onClick={(evt) => console.log(evt)}>
            <Container dir="row">
              <Container flex={[0, 0, "40px"]}>
                <Avatar size="s" image={SampleAvatar} />
              </Container>
              <Container flex={[1, 1, 0]}>Barack Obama</Container>
              <Container flex={[0, 0, "40px"]} align="right">
                <Icon name="chevron-right" />
              </Container>
            </Container>
          </Bubble>
          <Bubble persona="system" onClick={(evt) => console.log(evt)}>
            <Container dir="row">
              <Container flex={[0, 0, "40px"]}>
                <Avatar size="s" image={SampleAvatar} />
              </Container>
              <Container flex={[1, 1, 0]}>Barack Obama</Container>
              <Container flex={[0, 0, "40px"]} align="right">
                <Icon name="chevron-right" />
              </Container>
            </Container>
          </Bubble>
        </Bubbles>
      </BubbleGroup>
    </ReactSpecimen>
  )}

`;
