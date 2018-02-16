import { injectGlobal } from "styled-components";

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
`;
