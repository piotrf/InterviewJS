import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerIntro } from "../views";

export default () => markdown`

  # Viewer Intro

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerIntro />
    </ReactSpecimen>
  )}
`;
