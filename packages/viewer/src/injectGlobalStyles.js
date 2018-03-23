/* eslint no-unused-expressions: 0 */
import { injectGlobal } from "styled-components";
import ReactModal from "react-modal";

import { color, reset } from "interviewjs-styleguide";

injectGlobal`
  ${reset};
  html {
    height: 100%;
    width: 100%;
  }
  body {
    background: ${color.greyWt};
    height: 100%;
  }
  #root {
    height: 100%;
  }
  ::selection { background: ${color.blueWt}; }
  ::-moz-selection { background: ${color.blueWt}; }
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

ReactModal.defaultStyles = {};
