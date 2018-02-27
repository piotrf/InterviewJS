import css from "styled-components";

import { setSpace } from "../../../utils";

const BubbleGroup = css.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  &:not(:first-child) {
    ${setSpace("mtm")};
  }
`;

export default BubbleGroup;
