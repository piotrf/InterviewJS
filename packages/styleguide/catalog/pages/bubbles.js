import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble } from "../components";

export default () => markdown`

  ## Animated bubbles

  ${(
    <ReactSpecimen span={2} dark>
      <Bubble animated>Animated bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble animated delay={1000}>
        Animated bubble with a delay
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble animated delay={2000}>
        Animated bubble with a longer delay
      </Bubble>
    </ReactSpecimen>
  )}

  ## User bubbles vs Interviewee bubbles

  ${(
    <ReactSpecimen span={3} dark>
      <Bubble persona="speaker">Single bubble has no hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">Single bubble has no hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Bubble persona="speaker">
        First bubble in a group has one hard corner
      </Bubble>
      <Bubble persona="speaker">
        Last bubble in a group has one hard corner
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">
        First bubble in a group has one hard corner
      </Bubble>
      <Bubble persona="user">Last bubble in a group has one hard corner</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Bubble persona="speaker">
        First bubble in a group has one hard corner
      </Bubble>
      <Bubble persona="speaker">Middle bubbles have two hard corners</Bubble>
      <Bubble persona="speaker">
        Last bubble in a group has one hard corner
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">
        First bubble in a group has one hard corner
      </Bubble>
      <Bubble persona="user">Middle bubbles have two hard corners</Bubble>
      <Bubble persona="user">Last bubble in a group has one hard corner</Bubble>
    </ReactSpecimen>
  )}

  ## System bubbles

  ${(
    <ReactSpecimen span={2} dark>
      <Bubble persona="system">A bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble persona="system">First bubble</Bubble>
      <Bubble persona="system">Last Bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble persona="system">First bubble</Bubble>
      <Bubble persona="system">Middle Bubble</Bubble>
      <Bubble persona="system">Last bubble</Bubble>
    </ReactSpecimen>
  )}

  ## Themeable bubbles

  ${(
    <ReactSpecimen span={2} dark>
      <Bubble persona="speaker" theme={{ font: "sans-serif" }}>
        Custom bubble font
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble persona="system" theme={{ color: "cyan" }}>
        Custom bubble text
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Bubble
        persona="user"
        theme={{ backg: "cyan", color: "red", font: "serif" }}
      >
        Custom bubble
      </Bubble>
    </ReactSpecimen>
  )}
`;
