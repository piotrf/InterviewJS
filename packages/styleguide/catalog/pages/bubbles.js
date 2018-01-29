import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble } from "../components";

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
      <Bubble theme={{ color: "cyan" }}>Custom bubble text</Bubble>
      <Bubble theme={{ font: "sans-serif" }}>Custom bubble font</Bubble>
      <Bubble theme={{ backg: "cyan", color: "red", font: "serif" }}>
        Custom bubble
      </Bubble>
    </ReactSpecimen>
  )}

`;
