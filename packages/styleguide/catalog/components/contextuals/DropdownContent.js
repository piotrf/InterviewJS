import css from "styled-components";

import { setSpace } from "../../../utils";

const DropdownContent = css.div`
  & ul, & li, & button {
    display: block;
    text-align: center;
  }
  & button {
    ${setSpace("pas")};
    width: 100%;
  }
`;

export default DropdownContent;
