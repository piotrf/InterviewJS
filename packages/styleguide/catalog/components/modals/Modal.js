import css from "styled-components";

import { color, radius, setSpace } from "../../../utils";

require("./modals.css");

const Modal = css.div`
  ${setSpace("pam")};
  background: ${color.white};
  border-radius: ${radius.h};
  box-shadow: 0 2px 4px ${color.greyLt};
  flex: 0 0 600px;
  max-height: 500px;
  max-width: 500px;
  min-height: 320px;
  min-width: 320px;
  overflow-y: auto;
`;

export default Modal;
