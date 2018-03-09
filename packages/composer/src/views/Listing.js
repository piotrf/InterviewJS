/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { arrayOf, func, object, shape, string } from "prop-types";

import {
  Action,
  Avatar,
  Container,
  Dropdown,
  DropdownContent,
  Icon,
  PageSubtitle,
  PageTitle,
  Separator,
  Text,
  breakpoint,
  color,
  disselect,
  radius,
  setHeight,
  setSpace,
  time
} from "interviewjs-styleguide";

import { NewStoryModal, Stories, Story, WelcomeModal } from "../partials";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;

const PageHead = css.div`
  align-items: center;
  background: ${color.greyWt};
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  &:after {
    ${setHeight("m")};
    background: linear-gradient(${color.greyWt}, rgba(247, 247, 247, 0));
    content: ' ';
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;s
    width: 100%;
  }
`;

const StoryNew = css(Container)`
  ${disselect};
  ${setSpace("mhh")};
  border-radius: ${radius.l};
  cursor: pointer;
  ${PageSubtitle} {
    ${setSpace("mbx")};
    color: ${color.blueM};
  }
  ${Text} {
    color: ${color.greyBlk};
  }
  transition: box-shadow ${time.m}, transform ${time.m};
  &:active {
    box-shadow: 0 1px 2px ${color.shadowHL};
    transform: translateY(1px);
  }
`;

const PageBody = css.div`
`;

const UserMenu = css.div`
`;
const UserDdToggle = css.div`
  align-content: center;
  align-items: center;
  color: ${color.blueM};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  transition: transform ${time.m};
  &:active {
    transform: translateY(1px);
  }
  ${Text} {
    ${setSpace("mrs")};
    ${breakpoint.onlyphone} {
      display: none;
    }
  }
  ${Avatar} {
    ${setSpace("mrs")};
    border: 2px solid ${color.white};
    box-shadow: 0 2px 4px ${color.shadowHL};
    display: inline-block;
    float: left;
  }
`;

export default class ListingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createStoryModal: false,
      welcomeModal: true
    };
    this.blockWelcomeModal = this.blockWelcomeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleNewStoryModal = this.toggleNewStoryModal.bind(this);
  }
  handleLogout() {
    console.log("handleLogout"); // TODO
    this.props.router.push(`/`);
  }
  toggleNewStoryModal() {
    this.setState({ createStoryModal: !this.state.createStoryModal });
  }
  blockWelcomeModal() {
    localStorage.setItem("welcomeModalBlocker", "active");
    this.setState({ welcomeModal: false, createStoryModal: true });
  }
  render() {
    const { createStoryModal, welcomeModal } = this.state;
    const welcomeModalBlocker = localStorage.getItem("welcomeModalBlocker");
    return [
      welcomeModalBlocker !== "active" ? (
        <WelcomeModal
          handleClose={this.blockWelcomeModal}
          isOpen={welcomeModal}
          key="WelcomeModal"
        />
      ) : null,
      <Page key="Page">
        <PageHead>
          <Container flex={[1, 1, `${100 / 3}%`]} padded>
            <UserMenu>
              <Dropdown
                html={
                  <DropdownContent>
                    <Action onClick={this.handleLogout} tone="negative">
                      Sign out
                    </Action>
                  </DropdownContent>
                }
                position="bottom"
              >
                <UserDdToggle>
                  <Avatar image={this.props.user.avatar} size="m" />
                  <Text typo="p4">{this.props.user.name}</Text>
                  <Icon name="arrow-down" size="x" />
                </UserDdToggle>
              </Dropdown>
            </UserMenu>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="center">
            <PageTitle typo="h1">Your Stories</PageTitle>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
            <Action primary onClick={this.toggleNewStoryModal}>
              <Icon name="plus" size="s" /> Create new
            </Action>
          </Container>
        </PageHead>
        <Separator silent size="h" />
        <PageBody>
          <Container limit="l">
            <Stories>
              {this.props.stories.length > 0 ? (
                this.props.stories.map((story, i) => (
                  <Story
                    {...this.props}
                    deleteStory={() => this.props.deleteStory(i)}
                    key={story.id}
                    openStory={() =>
                      this.props.router.push(`/my/stories/${story.id}`)
                    }
                    story={story}
                    storyIndex={i}
                  />
                ))
              ) : (
                <StoryNew
                  fill="white"
                  onClick={this.toggleNewStoryModal}
                  padded
                  shift
                >
                  <PageSubtitle typo="h2">Create new</PageSubtitle>
                  <Text typo="p2">Start your new story here…</Text>
                </StoryNew>
              )}
            </Stories>
          </Container>
        </PageBody>
      </Page>,
      createStoryModal ? (
        <NewStoryModal
          {...this.props}
          createStory={this.props.createStory}
          handleClose={this.toggleNewStoryModal}
          isOpen={createStoryModal}
          key="NewStoryModal"
          updateStory={this.props.updateStory}
        />
      ) : null
    ];
  }
}

ListingView.propTypes = {
  createStory: func,
  deleteStory: func,
  router: object,
  stories: arrayOf(object),
  updateStory: func,
  user: shape({
    name: string,
    id: string,
    avatar: string
  })
};

ListingView.defaultProps = {
  createStory: null,
  deleteStory: null,
  router: null,
  stories: [],
  updateStory: null,
  user: {}
};
