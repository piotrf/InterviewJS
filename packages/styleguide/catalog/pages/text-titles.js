import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Text, PageSubtitle, PageTitle } from "../components";

export default () => markdown`

  ## Page text (tag-specific)

  ${(
    <ReactSpecimen span={3}>
      <PageTitle typo="h1">Renders as h1</PageTitle>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <PageSubtitle typo="h1">Renders as h2</PageSubtitle>
    </ReactSpecimen>
  )}

  ## All text variations

  ${(
    <ReactSpecimen>
      <Text typo="h1">Renders as span</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h2">Renders as span</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h3">Renders as span</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h4">Renders as span</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h5">Renders as span</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h6">Renders as span</Text>
    </ReactSpecimen>
  )}

`;
