import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Chart, Cover } from "../partials";

import SampleImage from "../static/cover.jpg";

export default () => markdown`

  ## Covers

  ${(
    <ReactSpecimen dark span={3}>
      <Cover image={SampleImage}>Children</Cover>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen dark span={3}>
      <Cover image={SampleImage} compact>
        Children
      </Cover>
    </ReactSpecimen>
  )}

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
