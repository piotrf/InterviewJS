import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Avatar } from "../components";

import Sample from "../static/avatar.png";

export default () => markdown`
  ## Avatars

  ${(
    <ReactSpecimen span={2}>
      <Avatar size="x" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Avatar size="s" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Avatar size="m" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Avatar size="l" image={Sample} />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Avatar size="h" image={Sample} />
    </ReactSpecimen>
  )}

`;
