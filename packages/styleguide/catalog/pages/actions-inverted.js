import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Action, Icon } from "../components";

export default () => markdown`

  ## Rendered as buttons

  ${(
    <ReactSpecimen span={3} dark>
      <Action inverted onClick={evt => console.log(evt)}>
        Inverted action
      </Action>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Action inverted onClick={evt => console.log(evt)}>
        Inverted action that can go onto two lines
      </Action>
    </ReactSpecimen>
  )}

  ## Rendered as links

  ${(
    <ReactSpecimen span={3} dark>
      <Action inverted href="https://fb.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Inverted Action
      </Action>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Action inverted iconic href="https://fb.com" target="_blank">
        <Icon name="facebook" />
      </Action>
    </ReactSpecimen>
  )}

`;
