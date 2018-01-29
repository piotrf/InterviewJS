import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble, BubbleGroup } from "../components";

export default () => markdown`

  ## BubbleGroups w/ side bubbles

  ${(
    <ReactSpecimen>
      <BubbleGroup>
        <Bubble role="interviewee">Bubble from the left</Bubble>
        <Bubble role="interviewee">Another bubble from the left</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble role="user">Bubble from the right</Bubble>
        <Bubble role="user">Another bubble from the right</Bubble>
      </BubbleGroup>
    </ReactSpecimen>
  )}

`;
