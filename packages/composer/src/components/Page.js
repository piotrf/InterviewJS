import css from "styled-components";

import { Container } from "interviewjs-styleguide";

const Page = css(Container)`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
`;

export default Page;
