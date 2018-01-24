import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Avatar } from "../components";

import Sample from "../static/avatar.png";

export default () => markdown`
  ## Avatars

  ${(
    <ReactSpecimen>
      <Avatar size="x" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Avatar size="s" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Avatar size="m" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Avatar size="l" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Avatar size="h" image={Sample} />
    </ReactSpecimen>
  )}

`;
