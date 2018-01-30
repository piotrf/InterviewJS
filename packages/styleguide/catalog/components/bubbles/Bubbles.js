import css from "styled-components";

import { setSpace } from "../../../utils";

const Bubbles = css.div`
  align-content: stretch;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  ${({ character }) =>
    character === "user"
      ? `
    ${setSpace("prs")};
    align-items: flex-end;
  `
      : `
    align-items: flex-start;
  `}
`;

export default Bubbles;
