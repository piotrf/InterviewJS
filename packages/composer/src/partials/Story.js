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
      detailsModal: false,
      dropdown: false,
      intervieweesModal: false,
      metaModal: false
    };
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleIntervieweesModal = this.toggleIntervieweesModal.bind(this);
    this.toggleMetaModal = this.toggleMetaModal.bind(this);
    this.triggerDelete = this.triggerDelete.bind(this);
    this.triggerDetails = this.triggerDetails.bind(this);
    this.triggerInterviewees = this.triggerInterviewees.bind(this);
    this.triggerMeta = this.triggerMeta.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }
  toggleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }
  triggerDelete() {
    this.toggleDropdown();
    this.props.deleteStory();
  }
  toggleMetaModal() {
    this.setState({ metaModal: !this.state.metaModal });
  }
  toggleDetailsModal() {
    this.setState({ detailsModal: !this.state.detailsModal });
  }
  toggleIntervieweesModal() {
    this.setState({ intervieweesModal: !this.state.intervieweesModal });
  }
  triggerMeta() {
    this.toggleMetaModal();
    this.toggleDropdown();
  }
  triggerDetails() {
    this.toggleDetailsModal();
    this.toggleDropdown();
  }
  triggerInterviewees() {
    this.toggleIntervieweesModal();
    this.toggleDropdown();
  }
  updateStory(data) {
    this.props.updateStory(data, this.props.storyIndex);
    this.setState({ detailsModal: false, metaModal: false });
  }
  render() {
    const { detailsModal, intervieweesModal, metaModal } = this.state;
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
            onRequestClose={this.toggleDropdown}
            open={this.state.dropdown}
            html={
              <DropdownContent>
                <ul>
                  <li>
                    <Action onClick={this.triggerMeta}>Meta</Action>
                  </li>
                  <li>
                    <Action onClick={this.triggerDetails}>Details</Action>
                  </li>
                  <li>
                    <Action onClick={this.triggerInterviewees}>
                      Interviewees
                    </Action>
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
      </Container>,
      detailsModal ? (
        <StoryDetailsModal
          handleClose={this.toggleDetailsModal}
          isOpen={this.state.detailsModal}
          key="StoryDetailsModal"
          story={this.props.story}
          updateStory={this.updateStory}
        />
      ) : null,
      metaModal ? (
        <StoryMetaModal
          handleClose={this.toggleMetaModal}
          isOpen={this.state.metaModal}
          key="StoryMetaModal"
          story={this.props.story}
          updateStory={this.updateStory}
        />
      ) : null,
      intervieweesModal ? (
        <IntervieweesModal
          {...this.props}
          handleClose={this.toggleIntervieweesModal}
          isOpen={this.state.intervieweesModal}
          key="IntervieweesModal"
          storyIndex={this.props.storyIndex}
          interviewees={this.props.story.interviewees}
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
