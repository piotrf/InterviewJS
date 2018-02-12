import css from "styled-components";

import { setSpace } from "../../../utils";

const ModalFoot = css.div`
  ${setSpace("phl")};
  ${setSpace("ptm")};
  ${setSpace("pbl")};
  flex: 0 2 auto;
  text-align: center;
`;

export default ModalFoot;
