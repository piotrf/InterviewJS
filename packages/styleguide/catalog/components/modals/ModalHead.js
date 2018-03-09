import css from "styled-components";

import { Container } from "../../components";
import { color, setSpace } from "../../../utils";

const ModalHead = css(Container)`
  ${setSpace("ptl")};
  color: ${color.greyBlk};
  flex: 0 2 auto;
  text-align: center;
  & h1,
  & h2 { 
    ${setSpace("phl")};
  }
`;

export default ModalHead;
