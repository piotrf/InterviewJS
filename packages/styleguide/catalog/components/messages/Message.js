import css from "styled-components";

import { color, setType } from "../../../utils";

const Message = css.p`
  ${setType("x")};
  color: ${color.greyLLt};
  font-style: italic;
  text-align: center;
`;

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
