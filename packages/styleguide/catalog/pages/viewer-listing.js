import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { ViewerListing } from "../views";

export default () => markdown`

  # Viewer Listing

  ${(
    <ReactSpecimen responsive noSource>
      <ViewerListing />
    </ReactSpecimen>
  )}
`;
