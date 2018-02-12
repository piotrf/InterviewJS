import css from "styled-components";
import ReactModal from "react-modal";

import { color, radius, setSpace } from "../../../utils";

require("./modals.css");

const Modal = css(ReactModal)`
  ${setSpace("pam")};
  background: ${color.white};
  border-radius: ${radius.h};
  box-shadow: 0 2px 4px ${color.greyLt};
  flex: 0 0 600px;
  max-height: 500px;
  min-height: 320px;
  overflow-y: auto;
  z-index: 10;
  &:focus {
    outline: none;
  }
`;

export default Modal;
