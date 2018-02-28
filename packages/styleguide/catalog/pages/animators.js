import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Animator } from "../components";

export default () => markdown`

  ## Default Animators

  ${(
    <ReactSpecimen span={3}>
      <Animator>An animated element</Animator>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Animator delay={500}>An element animated with a delay</Animator>
    </ReactSpecimen>
  )}

`;
