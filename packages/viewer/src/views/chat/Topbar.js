import css from "styled-components";

import { Container, color } from "interviewjs-styleguide";

const Topbar = css(Container)`
  align-items: center;
  background: ${color.white};
  border: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export default Topbar;
