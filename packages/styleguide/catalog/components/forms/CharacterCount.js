import css from "styled-components";
import {} from "prop-types";

import { color, font, setType } from "../../../utils";

const CharacterCount = css.sup`
  ${setType("x")};
  color: ${color.greyLt};
  font-family: ${font.serif};
`;

CharacterCount.propTypes = {};

CharacterCount.defaultProps = {};

export default CharacterCount;
