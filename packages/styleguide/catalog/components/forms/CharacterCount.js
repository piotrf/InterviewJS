import css from "styled-components";
import {} from "prop-types";

import { color, styleText } from "../../../utils";

const CharacterCount = css.sup`
  ${styleText.characterCount};
  color: ${color.greyLt};
`;

CharacterCount.propTypes = {};

CharacterCount.defaultProps = {};

export default CharacterCount;
