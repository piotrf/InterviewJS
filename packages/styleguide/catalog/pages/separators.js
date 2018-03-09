import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Separator } from "../components";

export default () => markdown`

  ## Horizontal vs. Vertical

  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" />
    </ReactSpecimen>
  )}

  ## Size variations

  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="n" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="n" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="x" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="x" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="s" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="s" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="m" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="m" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="l" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="l" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" size="h" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" size="h" />
    </ReactSpecimen>
  )}

  ## Effects

  ${(
    <ReactSpecimen span={3}>
      <Separator dir="h" silent />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Separator dir="v" silent />
    </ReactSpecimen>
  )}

`;
