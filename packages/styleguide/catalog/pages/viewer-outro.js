import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerOutro, ViewerOutro2, ViewerOutro3 } from "../views";

export default () => markdown`

  # Viewer Outro

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerOutro />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerOutro2 />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerOutro3 />
    </ReactSpecimen>
  )}
`;
