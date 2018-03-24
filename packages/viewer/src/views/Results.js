/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageSubtitle,
  Separator,
  setSpace
} from "interviewjs-styleguide";

import {
  Chart,
  Cover,
  Page,
  PageBody,
  PageHead,
  ShareModal,
  StoryDetailsModal,
  Topbar
} from "../partials";

const PollItem = css(Container)`
  &:not(:last-child) {
    ${setSpace("mbl")};
  }
`;

export default class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = { storyDetailsModal: false, shareStoryModal: false };
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleShareStoryModal = this.toggleShareStoryModal.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  toggleShareStoryModal() {
    this.setState({ shareStoryModal: !this.state.shareStoryModal });
  }
  render() {
    const { story } = this.props;
    const { poll } = story;
    return [
      <Topbar
        handleDetails={this.toggleDetailsModal}
        handleBack={() => this.props.router.push(`/${story.id}/poll`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="x" flex={[1, 0, `${100 / 4}%`]}>
          {poll.map((item) => (
            <PollItem key={item.question}>
              <PageSubtitle typo="h3">{item.question}</PageSubtitle>
              <Separator silent size="m" />
              <Chart
                answer1={item.answer1}
                answer2={item.answer2}
                val1={30} // TODO @LAURIAN plug in live poll results
                val2={70} // TODO @LAURIAN plug in live poll results
              />
            </PollItem>
          ))}
          <Separator size="m" silent />
          <Actionbar>
            <Action primary fixed onClick={this.toggleShareStoryModal}>
              Share this story
            </Action>
          </Actionbar>
        </PageBody>
      </Page>,
      this.state.storyDetailsModal ? (
        <StoryDetailsModal
          handleClose={this.toggleDetailsModal}
          isOpen={this.state.storyDetailsModal}
          key="detailsModal"
          story={story}
        />
      ) : null,
      this.state.shareStoryModal ? (
        <ShareModal
          handleClose={this.toggleShareStoryModal}
          isOpen={this.state.shareStoryModal}
          key="shareModal"
          story={story}
          body={<Container />}
        />
      ) : null
    ];
  }
}

ResultsView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ResultsView.defaultProps = {
  router: null,
  story: {}
};
