import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Breadcrumbs, Breadcrumb } from "../components";

export default () => markdown`

  ## Breadcrumbs

  ${(
    <ReactSpecimen>
      <Breadcrumbs count={4}>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step one
        </Breadcrumb>
        <Breadcrumb state="active" onClick={evt => console.log(evt)}>
          Step two
        </Breadcrumb>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step three
        </Breadcrumb>
        <Breadcrumb>Step four</Breadcrumb>
      </Breadcrumbs>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Breadcrumbs count={3}>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step one
        </Breadcrumb>
        <Breadcrumb state="active" onClick={evt => console.log(evt)}>
          Step two
        </Breadcrumb>
        <Breadcrumb>Step three</Breadcrumb>
      </Breadcrumbs>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Breadcrumbs count={2}>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step one
        </Breadcrumb>
        <Breadcrumb state="active" onClick={evt => console.log(evt)}>
          Step two
        </Breadcrumb>
      </Breadcrumbs>
    </ReactSpecimen>
  )}

`;
