import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Preloader } from "../components";

export default () => markdown`

  ## Preloader

  ${(
    <ReactSpecimen>
      <Preloader />
    </ReactSpecimen>
  )}
`;
