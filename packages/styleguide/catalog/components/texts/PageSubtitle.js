import css from "styled-components";
import Text from "./Text";

import { color } from "../../../utils";

const PageSubtitle = css(Text.withComponent("h2"))`
  color: ${color.blueBlk};
`;

export default PageSubtitle;
