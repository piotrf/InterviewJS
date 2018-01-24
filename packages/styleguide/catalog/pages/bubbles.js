import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble, BubbleGroup } from "../components";

export default () => markdown`
  ## Default bubbles

  ${(
    <ReactSpecimen span={2}>
      <Bubble>Single bubble has one hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble>First bubble in a group has bottom hard corners</Bubble>
      <Bubble>Last bubble in a group has one rounded corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble>First bubble in a group has bottom hard corners</Bubble>
      <Bubble>Middle bubbles have all hard corners</Bubble>
      <Bubble>Last bubble in a group has one rounded corner</Bubble>
    </ReactSpecimen>
  )}

  ## Themeable bubbles

  ${(
    <ReactSpecimen>
      <Bubble theme={{ backg: "#ccc", color: "#333" }}>
        Bubble with a custom background and font color
      </Bubble>
      <Bubble theme={{ backg: "red" }}>Bubble with a custom background</Bubble>
      <Bubble theme={{ color: "yellow" }}>
        Bubble with a custom font color
      </Bubble>
    </ReactSpecimen>
  )}

  ## BubbleGroups w/ side bubbles

  ${(
    <ReactSpecimen span={3}>
      <BubbleGroup>
        <Bubble side="left">Bubble from the left</Bubble>
        <Bubble side="left">Another bubble from the left</Bubble>
      </BubbleGroup>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <BubbleGroup>
        <Bubble side="right">Bubble from the right</Bubble>
        <Bubble side="right">Another bubble from the right</Bubble>
      </BubbleGroup>
    </ReactSpecimen>
  )}

`;
