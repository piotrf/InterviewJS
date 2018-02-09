import React from "react";
import css from "styled-components";
import { arrayOf, oneOfType, node } from "prop-types";

import { color, setSpace } from "../../../utils";

import { Container, Text } from "../../components";

const StoriesListHead = css(Container)`
  ${setSpace("mhl")};
  color: ${color.greyM};
`;
const StoriesList = css.ol`
  display: block;
  & > * {
    ${setSpace("mbm")};
  }
`;

const Stories = props => (
  <Container>
    <StoriesListHead dir="row" padded>
      <Container flex={[1, 1, "60%"]}>
        <Text typo="p5" nowrap>
          Title
        </Text>
      </Container>
      <Container flex={[0, 0, "20%"]} align="center">
        <Text typo="p5" nowrap>
          Modified
        </Text>
      </Container>
      <Container flex={[0, 0, "20%"]} align="right">
        <Text typo="p5" nowrap>
          Interviewees
        </Text>
      </Container>
    </StoriesListHead>
    <StoriesList>{props.children}</StoriesList>
  </Container>
);

Stories.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

Stories.defaultProps = {};

export default Stories;
