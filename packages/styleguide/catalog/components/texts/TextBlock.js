import css from "styled-components";
import Text from "./Text";

import { setType, setSpace } from "../../../utils";

const TextBlock = css(Text.withComponent("div"))`
  h3 {
    ${setType("x")};
    font-weight: bold;
  }
  p {
    ${setType("s")};
  }
`;

export default TextBlock;
