import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Tabs, Tab } from "../components";

export default () => markdown`

  ${(
    <ReactSpecimen>
      <Tabs>
        <Tab onClick={(e) => console.log(e)}>A tab</Tab>
        <Tab active>Active tab</Tab>
      </Tabs>
    </ReactSpecimen>
  )}
  
  ${(
    <ReactSpecimen>
      <Tabs>
        <Tab active>Active tab</Tab>
        <Tab onClick={(e) => console.log(e)}>A tab</Tab>
      </Tabs>
    </ReactSpecimen>
  )}
`;
