import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Breadcrumbs, Breadcrumb } from "../components";

export default () => markdown`

  ## Breadcrumbs

  ${(
    <ReactSpecimen>
      <Breadcrumbs>
        <Breadcrumb state="active" onClick={evt => console.log(evt)}>
          Step one
        </Breadcrumb>
        <Breadcrumb>Step two</Breadcrumb>
        <Breadcrumb>Step three</Breadcrumb>
      </Breadcrumbs>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Breadcrumbs>
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
      <Breadcrumbs>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step one
        </Breadcrumb>
        <Breadcrumb state="passed" onClick={evt => console.log(evt)}>
          Step two
        </Breadcrumb>
        <Breadcrumb state="active" onClick={evt => console.log(evt)}>
          Step three
        </Breadcrumb>
      </Breadcrumbs>
    </ReactSpecimen>
  )}
`;
