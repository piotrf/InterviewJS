/* eslint react/forbid-prop-types: 0 */
/* eslint react/prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string, func } from "prop-types";
import axios from "axios";

import {
  Action,
  Actionbar,
  Container,
  PageSubtitle,
  PageParagraph,
  Separator,
  setSpace,
  color
} from "interviewjs-styleguide";

import {
  Cover,
  Page,
  PageBody,
  PageHead,
  StoryDetailsModal,
  Topbar
} from "../partials";

const PollItem = css(Container)`
  &:not(:last-child) {
    ${setSpace("mbl")};
  }
  ${Actionbar} {
    ${setSpace("phn")};
  }
`;

const Aside = css(PageParagraph)`
  color: ${color.flareHD};
`;

export default class PollView extends Component {
  constructor(props) {
    super(props);
    const { story } = this.props;
    const localPoll = JSON.parse(localStorage.getItem(`poll-${story.id}`));
    this.state = {
      formData: localPoll || {},
      hasLocalPoll: !!localPoll,
      storyDetailsModal: false
    };
    this.moveOn = this.moveOn.bind(this);
    this.submitPoll = this.submitPoll.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
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
      const storyURL = window.InterviewJS.getStoryURL(
        this.props.params.storyId
      );
      if (storyURL)
        axios
          .get(storyURL)
          .then((response) => this.props.createStory(response.data));
    }
  }

  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }

  submitPoll() {
    const { story } = this.props;
    localStorage.setItem(
      `poll-${story.id}`,
      JSON.stringify(this.state.formData)
    );
    console.log(this.state.formData);
    axios
      .post("https://api.interviewjs.io/v1/polls", {
        id: this.props.params.storyId,
        viewer: {
          host: document.location.hostname,
          version: process.env.VERSION
        },
        poll: this.state.formData
      })
      .then(() => this.moveOn())
      .catch(() => this.moveOn());
  }

  moveOn() {
    this.props.router.push(`/${this.props.story.id}/results`);
  }

  render() {
    const { hasLocalPoll } = this.state;
    const { story } = this.props;
    if (!story || Object.keys(story).length === 0) return null; // FIXME show spinner

    const { poll } = story;
    return [
      <Topbar
        handleDetails={this.toggleDetailsModal}
        handleBack={() => this.props.router.push(`/${story.id}/outro`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="x" flex={[1, 0, `${100 / 4}%`]}>
          {poll.filter((item) => !!item.id).map((item) => (
            <PollItem key={item.id}>
              <PageSubtitle typo="h3">{item.question}</PageSubtitle>
              <Separator silent size="m" />
              <Actionbar>
                <Action
                  active={this.state.formData[item.id] === 0}
                  disabled={hasLocalPoll}
                  fixed
                  inverted
                  onClick={
                    !hasLocalPoll
                      ? () =>
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              [item.id]: 0
                            }
                          })
                      : null
                  }
                >
                  {item.answer1}
                </Action>
                <Action
                  active={this.state.formData[item.id] === 1}
                  disabled={hasLocalPoll}
                  fixed
                  inverted
                  onClick={
                    !hasLocalPoll
                      ? () =>
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              [item.id]: 1
                            }
                          })
                      : null
                  }
                >
                  {item.answer2}
                </Action>
              </Actionbar>
            </PollItem>
          ))}
          <Separator size="l" silent />
          <Actionbar>
            <Action
              fixed
              onClick={this.moveOn}
              secondary
            >
              Skip
            </Action>
            <Action
              fixed
              onClick={hasLocalPoll ? this.moveOn : this.submitPoll}
              primary
            >
              Show me results
            </Action>
          </Actionbar>
          <Separator size="s" silent />
          <Aside typo="p6">
            This is a simple poll. We won’t use your data for anything else.
          </Aside>
        </PageBody>
      </Page>,
      this.state.storyDetailsModal ? (
        <StoryDetailsModal
          handleClose={this.toggleDetailsModal}
          isOpen={this.state.storyDetailsModal}
          key="detailsModal"
          story={story}
        />
      ) : null
    ];
  }
}

PollView.propTypes = {
  createStory: func.isRequired,
  router: object,
  story: shape({
    title: string
  })
};

PollView.defaultProps = {
  router: null,
  story: {}
};
