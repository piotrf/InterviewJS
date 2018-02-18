/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { arrayOf, func, object, shape, string } from "prop-types";

import {
  Action,
  color,
  Container,
  PageTitle,
  Separator,
  setHeight,
  UserMenu
} from "interviewjs-styleguide";

import { WelcomeModal, NewStoryModal } from "../modals";
import { Story, Stories } from "../partials";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
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

const PageBody = css.div`
`;

export default class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createStoryModal: false,
      welcomeModal: true
    };
    this.toggleNewStoryModal = this.toggleNewStoryModal.bind(this);
    this.blockWelcomeModal = this.blockWelcomeModal.bind(this);
  }
  toggleNewStoryModal() {
    this.setState({ createStoryModal: !this.state.createStoryModal });
  }
  blockWelcomeModal() {
    console.log("blockWelcomeModal");
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
            <UserMenu data={this.props.user} />
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="center">
            <PageTitle typo="h1">Your Stories</PageTitle>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
            <Action primary onClick={() => this.toggleNewStoryModal()}>
              Create new
            </Action>
          </Container>
        </PageHead>
        <Separator silent size="h" />
        <PageBody>
          <Container limit="l">
            <Stories>
              {this.props.stories.map((story, i) => (
                <Story
                  {...this.props}
                  deleteStory={() => this.props.deleteStory(i)}
                  key={story.id}
                  openStory={() =>
                    this.props.router.push(`stories/${story.id}`)
                  }
                  story={story}
                  storyIndex={i}
                />
              ))}
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

Listing.propTypes = {
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

Listing.defaultProps = {
  createStory: null,
  deleteStory: null,
  router: null,
  stories: [],
  updateStory: null,
  user: {}
};
