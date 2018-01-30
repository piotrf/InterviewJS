import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble } from "../components";

export default () => markdown`

  ## User bubbles vs Interviewee bubbles

  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="speaker">Single bubble has one hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">Single bubble has one hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="speaker">
        First bubble in a group has bottom hard corners
      </Bubble>
      <Bubble persona="speaker">
        Last bubble in a group has one rounded corner
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">
        First bubble in a group has bottom hard corners
      </Bubble>
      <Bubble persona="user">
        Last bubble in a group has one rounded corner
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="speaker">
        First bubble in a group has bottom hard corners
      </Bubble>
      <Bubble persona="speaker">Middle bubbles have all hard corners</Bubble>
      <Bubble persona="speaker">
        Last bubble in a group has one rounded corner
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">
        First bubble in a group has bottom hard corners
      </Bubble>
      <Bubble persona="user">Middle bubbles have all hard corners</Bubble>
      <Bubble persona="user">
        Last bubble in a group has one rounded corner
      </Bubble>
    </ReactSpecimen>
  )}

  ## System bubbles

  ${(
    <ReactSpecimen span={2}>
      <Bubble persona="system">A bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble persona="system">First bubble</Bubble>
      <Bubble persona="system">Last Bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble persona="system">First bubble</Bubble>
      <Bubble persona="system">Middle Bubble</Bubble>
      <Bubble persona="system">Last bubble</Bubble>
    </ReactSpecimen>
  )}

  ## Themeable bubbles

  ${(
    <ReactSpecimen span={2}>
      <Bubble persona="speaker" theme={{ font: "sans-serif" }}>
        Custom bubble font
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble persona="system" theme={{ color: "cyan" }}>
        Custom bubble text
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble
        persona="user"
        theme={{ backg: "cyan", color: "red", font: "serif" }}
      >
        Custom bubble
      </Bubble>
    </ReactSpecimen>
  )}
  )}

`;
