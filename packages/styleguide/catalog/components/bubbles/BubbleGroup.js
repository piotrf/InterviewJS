import css from "styled-components";

import { setSpace } from "../../../utils";

const BubbleGroup = css.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    ${setSpace("mts")};
  }
`;

export default BubbleGroup;
