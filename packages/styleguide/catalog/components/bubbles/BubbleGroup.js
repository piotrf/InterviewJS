import css from "styled-components";

import { setSpace } from "../../../utils";

const BubbleGroup = css.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  &:not(:first-child) {
    ${setSpace("mts")};
  }
`;

export default BubbleGroup;
