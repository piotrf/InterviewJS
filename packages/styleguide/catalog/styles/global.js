import { injectGlobal } from "styled-components";
import { color } from "../../utils";

/* eslint no-unused-expressions: 0 */
const globalStyles = injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${color.greyWt};
    margin: 0;
    padding: 0;
  }
`;

export default globalStyles;
