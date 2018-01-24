import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Bubble } from "../components";

export default () => markdown`
  ## Default bubbles

  ${(
    <ReactSpecimen span={2}>
      <Bubble>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble>
        Bubble 2 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble>
        Bubble 2 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble>
        Bubble 3 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}

  ## Themeable bubbles

  ${(
    <ReactSpecimen span={2}>
      <Bubble theme={{ backg: "#ccc", color: "#333" }}>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble theme={{ backg: "red" }}>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble theme={{ backg: "red" }}>
        Bubble 2 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Bubble theme={{ color: "yellow" }}>
        Bubble 1 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble theme={{ color: "yellow" }}>
        Bubble 2 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
      <Bubble theme={{ color: "yellow" }}>
        Bubble 3 rifle physical shrine j-pop concrete table singularity.
      </Bubble>
    </ReactSpecimen>
  )}

  ## User vs. Interviewee bubbles

  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="user" theme={{ backg: "#ccc", color: "#333" }}>
        User bubble
      </Bubble>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Bubble persona="interviewee" theme={{ backg: "red" }}>
        Interviewee bubble
      </Bubble>
      <Bubble persona="interviewee" theme={{ backg: "red" }}>
        Interviewee bubble
      </Bubble>
    </ReactSpecimen>
  )}

`;
