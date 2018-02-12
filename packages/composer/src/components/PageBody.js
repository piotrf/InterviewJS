import css from "styled-components";

import { Container, setSpace } from "interviewjs-styleguide";

const Page = css(Container)`
  ${setSpace("mth")};
  ${setSpace("phm")};
  ${setSpace("pvl")};
`;

export default Page;
