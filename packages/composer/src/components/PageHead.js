import css from "styled-components";

import { Container, color, setHeight, setSpace } from "interviewjs-styleguide";

const PageHead = css(Container)`
  ${setSpace("pam")};
  background: ${color.greyWt};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  &:after {
    ${setHeight("m")};
    background: linear-gradient(${color.greyWt}, rgba(247, 247, 247, 0));
    content: ' ';
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
  }
`;

export default PageHead;
