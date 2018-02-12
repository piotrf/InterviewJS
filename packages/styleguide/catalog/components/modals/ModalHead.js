import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ModalHead = css.div`
  ${setSpace("pam")};
  color: ${color.blueBlk};
  flex: 1 2 auto;
  text-align: center;
`;

export default ModalHead;
