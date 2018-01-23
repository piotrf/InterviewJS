import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Button, Icon } from "../components";

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
        <Icon name="twitter" /> Primary Button
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
        <Icon name="facebook" /> Secondary Button
      </Button>
    </ReactSpecimen>
  )}

`;
