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

  ### Neutral (active transparent)

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab onClick={(e) => console.log(e)}>A tab</PaneTab>
        <PaneTab active>Active tab</PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}

  #### disabled

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab disabled active>
          Active tab
        </PaneTab>
        <PaneTab disabled onClick={(e) => console.log(e)}>
          A tab
        </PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}

  ### Opinionated (active highlighted)

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab opinionated onClick={(e) => console.log(e)}>
          A tab
        </PaneTab>
        <PaneTab opinionated active>
          Active tab
        </PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}

  #### disabled

  ${(
    <ReactSpecimen>
      <PaneTabs>
        <PaneTab disabled opinionated active>
          Active tab
        </PaneTab>
        <PaneTab disabled opinionated onClick={(e) => console.log(e)}>
          A tab
        </PaneTab>
      </PaneTabs>
    </ReactSpecimen>
  )}
`;
