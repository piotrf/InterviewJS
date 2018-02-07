import css from "styled-components";
import {} from "prop-types";

import { color, font, setSpace, setType } from "../../../utils";

const Label = css.label`
  ${setSpace("phs")};
  ${setType("x")};
  background: ${color.white};
  color: ${color.blueBlk};
  font-family: ${font.serif};
  font-weight: bold;
`;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
