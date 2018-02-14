import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ModalBody = css.div`
  ${setSpace("phl")};
  ${setSpace("pvm")};
  color: ${color.greyBlk};
  flex: 2 1 auto;
  overflow-y: auto;
  position: relative;
`;

export default ModalBody;
