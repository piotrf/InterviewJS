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
`;

export default class OutroView extends Component {
  constructor(props) {
    super(props);
    this.state = { formData: {}, storyDetailsModal: false };
    this.submitPoll = this.submitPoll.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  submitPoll() {
    // TODO @LAURIAN
    console.log(`poll results: `, this.state.formData);
    this.props.router.push(`/${this.props.story.id}/results`);
  }
  render() {
    const { story } = this.props;
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
          {poll.map((item, i) => (
            <PollItem>
              <PageSubtitle typo="h3">{item.question}</PageSubtitle>
              <Separator silent size="m" />
              <Actionbar>
                <Action
                  active={this.state.formData[`question${i}`] === 0}
                  fixed
                  inverted
                  onClick={() =>
                    this.setState({
                      formData: {
                        ...this.state.formData,
                        [`question${i}`]: 0
                      }
                    })
                  }
                >
                  {item.answer1}
                </Action>
                <Action
                  active={this.state.formData[`question${i}`] === 1}
                  fixed
                  inverted
                  onClick={() =>
                    this.setState({
                      formData: {
                        ...this.state.formData,
                        [`question${i}`]: 1
                      }
                    })
                  }
                >
                  {item.answer2}
                </Action>
              </Actionbar>
            </PollItem>
          ))}
          <Separator size="l" silent />
          <Actionbar>
            <Action fixed onClick={this.submitPoll} primary>
              Show me results
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
      ) : null
    ];
  }
}

OutroView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

OutroView.defaultProps = {
  router: null,
  story: {}
};
