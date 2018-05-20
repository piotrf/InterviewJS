/* eslint react/forbid-prop-types: 0 */
/* eslint react/prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string, func } from "prop-types";
import axios from "axios";

import { Action, Actionbar, Container, PageSubtitle, Separator, setSpace } from "interviewjs-styleguide";

import { Chart, Cover, Page, PageBody, PageHead, ShareModal, StoryDetailsModal, Topbar } from "../partials";

const PollItem = css(Container)`
  &:not(:last-child) {
    ${setSpace("mbl")};
  }
`;

export default class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyDetailsModal: false,
      shareStoryModal: false,
      results: window.InterviewJS.poll || [],
    };

    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleShareStoryModal = this.toggleShareStoryModal.bind(this);
  }

  componentDidMount() {
    // I'm framed, wait for message with JSON that looks like a story -- FIXME
    if (window.top !== window && window.addEventListener) {
      window.addEventListener(
        "message",
        ({ data, origin, source }) => {
          console.log(origin, data, source);
          if (data.interviewees) this.props.createStory(data);
        },
        false
      );
    }

    // Load story via storyId -> getStoryURL
    if (
      (!this.props.story || Object.keys(this.props.story).length === 0) &&
      this.props.params.storyId &&
      window.InterviewJS &&
      window.InterviewJS.getStoryURL
    ) {
      const storyURL = window.InterviewJS.getStoryURL(this.props.params.storyId);
      if (storyURL) axios.get(storyURL).then(response => this.props.createStory(response.data));
    }
  }

  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }

  toggleShareStoryModal() {
    this.setState({ shareStoryModal: !this.state.shareStoryModal });
  }

  render() {
    const { story } = this.props;
    if (!story || Object.keys(story).length === 0) return null; // FIXME show spinner

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
          {poll.filter(item => !!item.id).map(item => (
            <PollItem key={item.question}>
              <PageSubtitle typo="h3">{item.question}</PageSubtitle>
              <Separator silent size="m" />
              <Chart
                answer1={item.answer1}
                answer2={item.answer2}
                val1={this.state.results.find(result => result.id === item.id) ? this.state.results.find(result => result.id === item.id).answer1 : 0}
                val2={this.state.results.find(result => result.id === item.id) ? this.state.results.find(result => result.id === item.id).answer2 : 0}
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
      ) : null,
    ];
  }
}

ResultsView.propTypes = {
  createStory: func.isRequired,
  router: object,
  story: shape({
    title: string,
  }),
};

ResultsView.defaultProps = {
  router: null,
  story: {},
};
