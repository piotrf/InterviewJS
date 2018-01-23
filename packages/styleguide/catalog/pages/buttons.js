import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Button } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen span={3}>
      <Button primary>Primary Button</Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary>
        <i className="">icon</i> Primary Button
      </Button>
    </ReactSpecimen>
  )}

  ## Secondary Buttons

  ${(
    <ReactSpecimen span={3}>
      <Button secondary>Secondary Button</Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button secondary>
        <i className="">icon</i> Secondary Button
      </Button>
    </ReactSpecimen>
  )}

`;
