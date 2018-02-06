import React from "react";
import { markdown, ReactSpecimen } from "catalog";

export default () => markdown`

  ## Text styles

  You can apply a style to any tag with the styleText mixin.

  ${(
    <ReactSpecimen>
      <span>
        Primary button
      </span>
    </ReactSpecimen>
  )}

`;
