import { bool, shape, string } from "prop-types";
import { Tooltip } from "react-tippy";
import css from "styled-components";
import React from "react";

import { color, radius, setSpace, time, disselect } from "../../../utils";

import { Action, Avatar, Container, Icon, Text, Tip } from "../../components";

const StoryEl = css(Container)`
  ${disselect};
  ${setSpace("mhl")};
  border-radius: ${radius.l};
  cursor: pointer;
  transition: box-shadow ${time.m}, transform ${time.m};
  &:active {
    box-shadow: 0 1px 2px ${color.shadowHL};
    transform: translateY(1px);
  }
`;
const StoryTitle = css(Text.withComponent("h2"))`
  ${disselect};
  ${setSpace("mbx")};
  color: ${color.blueBlk};
`;
const StorySummary = css(Text.withComponent("p"))`
  ${disselect};
  color: ${color.blueHL};
`;
const StoryDate = css(Text)`
  ${disselect};
  color: ${color.greyM};
`;
const StoryMenu = css.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const AvatarList = css.ul`
  text-align: right;
  white-space: nowrap;
`;
const AvatarListItem = css.li`
  border: 2px solid ${color.white};
  border-radius: ${radius.a};
  display: inline-block;
  margin-left: -10px;
  position: relative;
`;

const Story = props => {
  const toggleActions = e => {
    console.log(e);
  };
  return (
    <Container>
      <StoryEl dir="row" fill="white" padded shift {...props}>
        <Container flex={[1, 2, "60%"]}>
          <StoryTitle typo="h2">{props.data.title}</StoryTitle>
          <StorySummary typo="p5">{props.data.intro}</StorySummary>
        </Container>
        <Container flex={[2, 1, "20%"]} align="center">
          <StoryDate typo="p5">{props.data.byline.moddate}</StoryDate>
        </Container>
        <Container flex={[2, 1, "20%"]} align="right">
          <AvatarList>
            {props.data.interviewees.map(el => (
              <AvatarListItem key={el.name}>
                <Tip
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
                </Tip>
              </AvatarListItem>
            ))}
          </AvatarList>
        </Container>
      </StoryEl>
      <StoryMenu>
        <Action iconic onClick={e => toggleActions(e)}>
          <Icon name="ellipsis" />
        </Action>
      </StoryMenu>
    </Container>
  );
};

Story.propTypes = {
  data: shape({
    title: string.isRequired,
    intro: string.isRequired,
    byline: shape({
      moddate: string.isRequired
    }).isRequired
  }).isRequired
};

Story.defaultProps = {};

export default Story;
