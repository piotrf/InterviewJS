import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Chart } from "../partials";

export default () => markdown`

  ## Covers

  ## Charts

  ${(
    <ReactSpecimen dark>
      <Chart data={{ positive: 89, negative: 11 }} />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen dark>
      <Chart data={{ positive: 40, negative: 60 }} />
    </ReactSpecimen>
  )}

`;
