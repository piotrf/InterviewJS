import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Text, PageTitle } from "../components";

export default () => markdown`

  ## PageTitle

  ${(
    <ReactSpecimen>
      <PageTitle typo="h1">Renders as h1</PageTitle>
    </ReactSpecimen>
  )}

  ## All title-level text

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
