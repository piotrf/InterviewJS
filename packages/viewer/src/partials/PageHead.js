import css from "styled-components";

import { Container, PageTitle, setSpace, setType } from "interviewjs-styleguide";

const PageHead = css(Container)`
  ${setSpace("pbl")};
  width: 100%;
  ${PageTitle} {
    ${setType("h")};
  }
`;

export default PageHead;
