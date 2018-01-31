import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerChat } from "../views";

export default () => markdown`

  # Viewer Chat

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerChat />
    </ReactSpecimen>
  )}
`;
