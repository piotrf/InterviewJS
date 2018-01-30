import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import {
  Avatar,
  Bubble,
  Bubbles,
  BubbleGroup,
  BubbleAvatar
} from "../components";

import Sample from "../static/avatar.png";

export default () => markdown`

  ## BubbleGroups w/ side bubbles

  ${(
    <ReactSpecimen>
      <BubbleGroup>
        <BubbleAvatar>
          <Avatar size="x" image={Sample} />
        </BubbleAvatar>
        <Bubbles character="interviewee">
          <Bubble character="interviewee">Bubble from the left</Bubble>
          <Bubble character="interviewee">Another bubble from the left</Bubble>
        </Bubbles>
      </BubbleGroup>
      <BubbleGroup>
        <Bubbles character="user">
          <Bubble character="user">Bubble from the right</Bubble>
          <Bubble character="user">Another bubble from the right</Bubble>
        </Bubbles>
      </BubbleGroup>
    </ReactSpecimen>
  )}

`;
