import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerChat } from "../views";

export default () => markdown`

  # Viewer Intro

  ${(
    <ReactSpecimen responsive>
      <ViewerChat />
    </ReactSpecimen>
  )}
`;
