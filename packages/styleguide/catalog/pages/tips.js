import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Tip } from "../components";

export default () => markdown`

  ## Title-level text

  ${(
    <ReactSpecimen span={3}>
      <Tip
        animation="fade"
        arrow
        arrowSize="small"
        hideDelay={350}
        interactiveBorder={5}
        position="top"
        sticky
        theme="dark"
        title="A tip"
      >
        An element with a tip
      </Tip>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Tip
        animation="fade"
        arrow
        arrowSize="small"
        hideDelay={350}
        interactiveBorder={5}
        position="right"
        sticky
        theme="dark"
        title="A tip"
      >
        An element with a tip
      </Tip>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Tip
        animation="fade"
        arrow
        arrowSize="small"
        hideDelay={350}
        interactiveBorder={5}
        position="bottom"
        sticky
        theme="dark"
        title="A tip"
      >
        An element with a tip
      </Tip>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Tip
        animation="fade"
        arrow
        arrowSize="small"
        hideDelay={350}
        interactiveBorder={5}
        position="left"
        sticky
        theme="dark"
        title="A tip"
      >
        An element with a tip
      </Tip>
    </ReactSpecimen>
  )}

`;
