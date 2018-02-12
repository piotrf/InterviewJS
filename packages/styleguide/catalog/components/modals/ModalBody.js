import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ModalBody = css.div`
  ${setSpace("pam")};
  color: ${color.blueD};
  flex: 2 1 100%;
  overflow-y: auto;
`;

export default ModalBody;
