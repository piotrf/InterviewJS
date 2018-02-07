import React from "react";
import css from "styled-components";
import { markdown, ReactSpecimen } from "catalog";

import { Text } from "../components";

export default () => markdown`

  ## Title-level text

  ${(
    <ReactSpecimen>
      <Text typo="h1">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h2">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h3">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h4">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h5">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="h6">Some text</Text>
    </ReactSpecimen>
  )}

`;
