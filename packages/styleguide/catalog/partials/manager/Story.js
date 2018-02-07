import { shape, string } from "prop-types";
import { Tooltip } from "react-tippy";
import css from "styled-components";
import React from "react";

import {
  color,
  radius,
  setHeight,
  setSpace,
  time,
  truncate
} from "../../../utils";

import { Avatar, Container, Text } from "../../components";

const StoryEl = css(Container)`
  ${setHeight("h")};
  border-radius: ${radius.l};
  cursor: pointer;
  transition: box-shadow ${time.m}, transform ${time.m};
  &:active {
    box-shadow: none;
    transform: translateY(1px);
  }
`;
const StoryTitle = css(Text.withComponent("h2"))`
  ${setSpace("mbx")};
  ${truncate};
  color: ${color.blueBlk};
`;
const StorySummary = css(Text.withComponent("p"))`
  ${truncate};
  color: ${color.blueHL};
`;
const StoryDate = css(Text)`
  color: ${color.greyM};
`;
const AvatarList = css.ul`
  text-align: right;
`;
const AvatarListItem = css.li`
  border: 2px solid ${color.white};
  border-radius: ${radius.a};
  display: inline-block;
  margin-left: -10px;
  position: relative;
`;

const Story = (props) => (
  <StoryEl dir="row" fill="white" padded shift>
    <Container flex={[0, 0, "50%"]}>
      <StoryTitle typo="h2">{props.data.title}</StoryTitle>
      <StorySummary typo="p5">{props.data.summary}</StorySummary>
    </Container>
    <Container flex={[0, 0, "25%"]} align="center">
      <StoryDate typo="p5">{props.data.modified}</StoryDate>
    </Container>
    <Container flex={[0, 0, "25%"]} align="right">
      <AvatarList>
        {props.data.interviewees.map((el) => (
          <AvatarListItem key={el.name}>
            <Tooltip
              animation="fade"
              arrow
              arrowSize="small"
              hideDelay={350}
              interactiveBorder={5}
              position="bottom"
              sticky
              theme="dark"
              title={el.name}
            >
              <Avatar size="m" image={el.avatar} />
            </Tooltip>
          </AvatarListItem>
        ))}
      </AvatarList>
    </Container>
  </StoryEl>
);

Story.propTypes = {
  data: shape({
    title: string.isRequired,
    summary: string.isRequired,
    modified: string.isRequired
  }).isRequired
};

Story.defaultProps = {};

export default Story;
