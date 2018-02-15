import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Action, Tabs, Tab } from "../components";

export default () => markdown`

  ${(
    <ReactSpecimen span={3}>
      <Tabs>
        <Tab>
          <Action>A tab</Action>
        </Tab>
        <Tab>
          <Action>Another tab</Action>
        </Tab>
      </Tabs>
    </ReactSpecimen>
  )}
`;
