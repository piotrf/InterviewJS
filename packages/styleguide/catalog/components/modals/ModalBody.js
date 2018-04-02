import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ModalBody = css.div`
  ${setSpace("pal")};
  color: ${color.greyBlk};
  flex: 2 1 auto;
  overflow-y: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

export default ModalBody;
