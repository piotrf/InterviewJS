import React from "react";
import css from "styled-components";
import { markdown, ReactSpecimen } from "catalog";

import { Text } from "../components";

export default () => markdown`

  ## Body copy-level text

  ${(
    <ReactSpecimen>
      <Text typo="p1">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="p2">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="p3">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="p4">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="p5">Some text</Text>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Text typo="p6">Some text</Text>
    </ReactSpecimen>
  )}

`;
