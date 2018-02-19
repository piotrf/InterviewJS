import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { PaneTabs, PaneTab, Tabs, Tab } from "../components";

export default () => markdown`

  ## Link Tabs

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

  ## Pane Tabs

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab onClick={(e) => console.log(e)}>A tab</PaneTab>
        <PaneTab active>Active tab</PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab active>Active tab</PaneTab>
        <PaneTab onClick={(e) => console.log(e)}>A tab</PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}
`;
