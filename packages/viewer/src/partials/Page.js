import css from "styled-components";

import { Container, color } from "interviewjs-styleguide";

const Page = css(Container)`
  background: ${color.black};
  color: ${color.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
`;

export default Page;
