import { injectGlobal } from "styled-components";
import { color } from "../../utils";

import reset from "./reset";
import modals from "./modals";

/* eslint no-unused-expressions: 0 */
const globalStyles = injectGlobal`
  ${reset};
  html,
  body,
  #root,
  #root > div {
    height: 100%;
    width: 100%;
  }
  body {
    background: ${color.greyWt};
    margin: 0;
    padding: 0;
  }
  #root {
    overflow: hidden;
  }
  ::selection {
    background: ${color.blueWt};
  }
  ::-moz-selection {
    background: ${color.blueWt};
  }
  ${modals};
`;

export default globalStyles;
