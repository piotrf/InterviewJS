import React from "react";
import css from "styled-components";
import { array, object, shape } from "prop-types";

import { color, setSpace } from "../../../utils";

import { Container, Text } from "../../components";

const StoriesListHead = css(Container)`
  ${setSpace("mhl")};
  color: ${color.greyM};
`;
const StoriesList = css.ol`
  display: block;
  & > * {
    ${setSpace("mbs")};
  }
`;

const Stories = props => (
  <Container fill="grey">
    <StoriesListHead dir="row" padded>
      <Container flex={[1, 1, "60%"]}>
        <Text typo="p5">Title</Text>
      </Container>
      <Container flex={[0, 0, "20%"]} align="center">
        <Text typo="p5">Last Modified</Text>
      </Container>
      <Container flex={[0, 0, "20%"]} align="right">
        <Text typo="p5">Characters</Text>
      </Container>
    </StoriesListHead>
    <StoriesList>{props.children}</StoriesList>
  </Container>
);

Stories.propTypes = {};

Stories.defaultProps = {};

export default Stories;
