import css from "styled-components";

import { Container, setSpace } from "interviewjs-styleguide";

const PageBody = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
  width: 100%;
`;

export default PageBody;
