import css from "styled-components";

import { Container, color } from "interviewjs-styleguide";

const PageFoot = css(Container)`
  border: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default PageFoot;
