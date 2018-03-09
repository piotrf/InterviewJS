import css from "styled-components";
import Text from "./Text";

import { color } from "../../../utils";

const PageTitle = css(Text.withComponent("h1"))`
  color: ${color.blueBlk};
`;

export default PageTitle;
