import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerIntro2 } from "../views";

export default () => markdown`

  # Viewer Intro

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerIntro2 />
    </ReactSpecimen>
  )}
`;
