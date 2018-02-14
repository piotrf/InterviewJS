import { func, shape, string } from "prop-types";
import css from "styled-components";
import React from "react";

import { color, radius, setSpace, time, disselect } from "../../../utils";

import {
  Action,
  Avatar,
  Container,
  Dropdown,
  DropdownContent,
  Icon,
  Text,
  Tip
} from "../../components";

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

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.triggerDelete = this.triggerDelete.bind(this);
    this.triggerInfo = this.triggerInfo.bind(this);
  }
  toggleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }
  triggerDelete() {
    this.toggleDropdown();
    this.props.handleDelete();
  }
  triggerInfo() {
    this.toggleDropdown();
    console.log("triggerInfo()");
  }
  render() {
    return (
      <Container>
        <StoryEl
          {...this.props}
          dir="row"
          fill="white"
          onClick={this.props.handleOpen}
          padded
          shift
        >
          <Container flex={[1, 2, "60%"]}>
            <StoryTitle typo="h2">{this.props.data.title}</StoryTitle>
            <StorySummary typo="p5">{this.props.data.intro}</StorySummary>
          </Container>
          <Container flex={[2, 1, "20%"]} align="center">
            <StoryDate typo="p5">{this.props.data.pubDate}</StoryDate>
          </Container>
          <Container flex={[2, 1, "20%"]} align="right">
            <AvatarList>
              {this.props.data.interviewees.map(el => (
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
          <Dropdown
            onRequestClose={this.toggleDropdown}
            open={this.state.dropdown}
            html={
              <DropdownContent>
                <ul>
                  <li>
                    <Action onClick={this.triggerInfo}>Info</Action>
                  </li>
                  <li>
                    <Action tone="negative" onClick={this.triggerDelete}>
                      Delete
                    </Action>
                  </li>
                </ul>
              </DropdownContent>
            }
          >
            <Action iconic onClick={this.toggleDropdown}>
              <Icon name="ellipsis" />
            </Action>
          </Dropdown>
        </StoryMenu>
      </Container>
    );
  }
}

Story.propTypes = {
  data: shape({
    id: string.isRequried,
    intro: string.isRequired,
    pubDate: string.isRequired,
    title: string.isRequired
  }).isRequired,
  handleDelete: func.isRequired,
  handleOpen: func.isRequired
};

Story.defaultProps = {};
