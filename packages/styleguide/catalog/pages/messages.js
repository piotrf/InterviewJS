import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Icon, Message } from "../components";

export default () => markdown`

  ## System Messages

  ${(
    <ReactSpecimen>
      <Message>
        <Icon name="info-circle" size="x" /> Barack Obama left the chat. Chat to
        somebody else:
      </Message>
    </ReactSpecimen>
  )}
`;
