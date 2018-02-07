import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Stories } from "../partials";

export default () => markdown`

  ## Stories

  ${(
    <ReactSpecimen>
      <Stories />
    </ReactSpecimen>
  )}

`;
