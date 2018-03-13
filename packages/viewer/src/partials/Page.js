import css from "styled-components";

import { Container, color } from "interviewjs-styleguide";

const Page = css(Container)`
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default Page;
