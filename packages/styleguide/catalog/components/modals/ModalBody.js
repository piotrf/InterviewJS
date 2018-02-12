import css from "styled-components";

import { setSpace } from "../../../utils";

const ModalBody = css.div`
  ${setSpace("phl")};
  ${setSpace("pvm")};
  flex: 2 1 auto;
  overflow-y: auto;
  position: relative;
`;

export default ModalBody;
