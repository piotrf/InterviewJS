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
        <Bubbles persona="speaker">
          <Bubble persona="speaker">Bubble from the left</Bubble>
          <Bubble persona="speaker">Another bubble from the left</Bubble>
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

`;
