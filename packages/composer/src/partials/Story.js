import css from "styled-components";
import React from "react";
import { array, func, number, shape, string } from "prop-types";
import { format } from "date-fns";

import {
  Action,
  Avatar,
  Container,
  Dropdown,
  DropdownContent,
  Icon,
  Text,
  Tip,
  color,
  radius,
  setSpace,
  time,
  disselect
} from "interviewjs-styleguide";

import {
  DeleteModal,
  IntervieweesModal,
  StoryDetailsModal,
  StoryMetaModal
} from "../modals";

const StoryEl = css(Container)`
  ${disselect};
  ${setSpace("mhh")};
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
  color: ${color.blueM};
`;
const StorySummary = css(Text.withComponent("p"))`
  ${disselect};
  color: ${color.greyHD};
`;
const StoryDate = css(Text)`
  ${disselect};
  color: ${color.greyM};
`;
const StoryMenu = css.div`
  ${setSpace("mrm")};
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
    this.state = {
      deleteModal: false,
      detailsModal: false,
      settingsDropdown: false,
      intervieweesModal: false,
      metaModal: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }
  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  toggleDropdown(dropdown) {
    this.setState({ [dropdown]: !this.state[dropdown] });
  }
  triggerModal(modal) {
    this.toggleModal(modal);
    this.toggleDropdown("settingsDropdown");
  }
  updateStory(data) {
    this.props.updateStory(data, this.props.storyIndex);
    this.setState({ detailsModal: false, metaModal: false });
  }
  render() {
    const {
      deleteModal,
      detailsModal,
      intervieweesModal,
      metaModal
    } = this.state;
    return [
      <Container key="body">
        <StoryEl
          {...this.props}
          dir="row"
          fill="white"
          onClick={this.props.openStory}
          padded
          shift
        >
          <Container flex={[1, 2, "60%"]}>
            <StoryTitle typo="h2">{this.props.story.title}</StoryTitle>
            <StorySummary typo="p5">{this.props.story.intro}</StorySummary>
          </Container>
          <Container flex={[2, 1, "20%"]} align="center" hide="phone">
            <StoryDate typo="p5">
              {format(this.props.story.modDate, "D MMM YYYY")}
            </StoryDate>
          </Container>
          <Container flex={[2, 1, "20%"]} align="right">
            <AvatarList>
              {this.props.story.interviewees.map((el) => (
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
            onRequestClose={() => this.toggleDropdown("settingsDropdown")}
            open={this.state.settingsDropdown}
            html={
              <DropdownContent>
                <ul>
                  <li>
                    <Action onClick={() => this.triggerModal("metaModal")}>
                      Meta
                    </Action>
                  </li>
                  <li>
                    <Action onClick={() => this.triggerModal("detailsModal")}>
                      Details
                    </Action>
                  </li>
                  <li>
                    <Action
                      onClick={() => this.triggerModal("intervieweesModal")}
                    >
                      Interviewees
                    </Action>
                  </li>
                  <li>
                    <Action
                      tone="negative"
                      onClick={() => this.triggerModal("deleteModal")}
                    >
                      Delete
                    </Action>
                  </li>
                </ul>
              </DropdownContent>
            }
          >
            <Action
              iconic
              onClick={() => this.toggleDropdown("settingsDropdown")}
            >
              <Icon name="ellipsis" />
            </Action>
          </Dropdown>
        </StoryMenu>
      </Container>,
      detailsModal ? (
        <StoryDetailsModal
          handleClose={() => this.toggleModal("detailsModal")}
          isOpen={this.state.detailsModal}
          key="DetailsModal"
          story={this.props.story}
          updateStory={this.updateStory}
        />
      ) : null,
      metaModal ? (
        <StoryMetaModal
          handleClose={() => this.toggleModal("metaModal")}
          isOpen={this.state.metaModal}
          key="MetaModal"
          story={this.props.story}
          updateStory={this.updateStory}
        />
      ) : null,
      intervieweesModal ? (
        <IntervieweesModal
          {...this.props}
          handleClose={() => this.toggleModal("intervieweesModal")}
          isOpen={this.state.intervieweesModal}
          key="IntervieweesModal"
          story={this.props.story}
          storyIndex={this.props.storyIndex}
        />
      ) : null,
      deleteModal ? (
        <DeleteModal
          {...this.props}
          deleteStory={() => this.props.deleteStory(this.props.storyIndex)}
          handleClose={() => this.toggleModal("deleteModal")}
          isOpen={this.state.deleteModal}
          key="DeleteModal"
          story={this.props.story}
        />
      ) : null
    ];
  }
}

Story.propTypes = {
  story: shape({
    id: string.isRequried,
    interviewees: array.isRequired,
    intro: string.isRequired,
    pubDate: string.isRequired,
    title: string.isRequired
  }).isRequired,
  deleteStory: func.isRequired,
  storyIndex: number.isRequired,
  openStory: func.isRequired,
  updateStory: func.isRequired
};

Story.defaultProps = {};
