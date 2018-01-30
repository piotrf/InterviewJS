import css from "styled-components";
import {} from "prop-types";

import { color, setSpace, styleText } from "../../../utils";

const Label = css.label`
  ${setSpace("phs")};
  ${styleText.label};
  background: ${color.white};
  color: ${color.blueBlk};
`;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
