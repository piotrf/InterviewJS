import css from "styled-components";

import { setSpace } from "../../../utils";

const ModalBody = css.div`
  ${setSpace("pam")};
  flex: 2 1 100%;
  overflow-y: auto;
`;

export default ModalBody;
