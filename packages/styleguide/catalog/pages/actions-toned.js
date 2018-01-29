import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Action } from "../components";

export default () => markdown`
  ## Primary Actions

  ${(
    <ReactSpecimen span={3}>
      <Action primary tone="positive" onClick={evt => console.log(evt)}>
        Primary action
      </Action>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Action primary tone="negative" onClick={evt => console.log(evt)}>
        Primary action
      </Action>
    </ReactSpecimen>
  )}

  ## Secondary Actions

  ${(
    <ReactSpecimen span={3}>
      <Action secondary tone="positive" onClick={evt => console.log(evt)}>
        Secondary action
      </Action>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Action secondary tone="negative" onClick={evt => console.log(evt)}>
        Secondary action
      </Action>
    </ReactSpecimen>
  )}

  ## Plain Actions

  ${(
    <ReactSpecimen span={3}>
      <Action tone="positive" onClick={evt => console.log(evt)}>
        Plain action
      </Action>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Action tone="negative" onClick={evt => console.log(evt)}>
        Plain action
      </Action>
    </ReactSpecimen>
  )}
`;
