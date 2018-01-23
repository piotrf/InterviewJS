import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Button, Icon } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen span={3}>
      <Button primary handleClick={evt => console.log(evt)}>
        Primary Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary href="http://twitter.com" target="_blank">
        <Icon name="twitter" /> Primary Button
      </Button>
    </ReactSpecimen>
  )}

  ## Secondary Buttons

  ${(
    <ReactSpecimen span={3}>
      <Button secondary handleClick={evt => console.log(evt)}>
        Secondary Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button secondary href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> Secondary Button
      </Button>
    </ReactSpecimen>
  )}

`;
