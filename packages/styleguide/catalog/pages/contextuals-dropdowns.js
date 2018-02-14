import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Dropdown } from "../components";

export default () => markdown`

  ${(
    <ReactSpecimen span={3}>
      <Dropdown html={<p>hello</p>} position="top">
        <span>An element with a dropdown</span>
      </Dropdown>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Dropdown html={<p>hello</p>} position="right">
        <span>An element with a dropdown</span>
      </Dropdown>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Dropdown html={<p>hello</p>} position="bottom">
        <span>An element with a dropdown</span>
      </Dropdown>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <Dropdown html={<p>hello</p>} position="left">
        <span>An element with a dropdown</span>
      </Dropdown>
    </ReactSpecimen>
  )}

`;
