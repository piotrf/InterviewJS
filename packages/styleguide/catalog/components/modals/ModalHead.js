import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ModalHead = css.div`
  ${setSpace("phl")};
  ${setSpace("ptl")};
  color: ${color.blueBlk};
  flex: 0 2 auto;
  text-align: center;
`;

export default ModalHead;
