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
      <Bubble persona="interviewee">Single bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">Single bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Bubble persona="interviewee">First bubble</Bubble>
      <Bubble persona="interviewee">Last bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">First bubble</Bubble>
      <Bubble persona="user">Last bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Bubble persona="interviewee">First bubble</Bubble>
      <Bubble persona="interviewee">Middle bubble</Bubble>
      <Bubble persona="interviewee">Last bubble</Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user">First bubble</Bubble>
      <Bubble persona="user">Middle bubble</Bubble>
      <Bubble persona="user">Last bubble</Bubble>
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
      <Bubble persona="interviewee" theme={{ font: "sans-serif" }}>
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
