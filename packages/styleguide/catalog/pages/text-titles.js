import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Text } from "../components";

export default () => markdown`

  ## All title variations

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
