import css from "styled-components";
import {} from "prop-types";

import { color, styleText } from "../../../utils";

const Label = css.label`
  ${styleText.label};
  color: ${color.blueBlk};
`;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
