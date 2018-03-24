/* eslint react/forbid-prop-types: 0 */
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  PageSubtitle,
  Separator
} from "interviewjs-styleguide";

import {
  Cover,
  Page,
  PageBody,
  PageHead,
  StoryDetailsModal,
  Topbar
} from "../partials";

export default class OutroView extends Component {
  constructor(props) {
    super(props);
    this.state = { storyDetailsModal: false };
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  render() {
    const { story } = this.props;
    const resultScore = 95; // TODO @LAURIAN: plug in real score
    const getResultScore = () => {
      if (resultScore >= 95) {
        return `Wow, you are truly curious! You have spoken to everyone and
        collected ${resultScore}% of the information. The world needs more people like
        you and we can’t wait to hear what you have to say!`;
      } else if (resultScore >= 70) {
        return `Well done, you have spoken to all interviewees and collected ${resultScore}% of the information.  You’re pretty well informed now!`;
      } else if (resultScore >= 50) {
        return `You have spoken to all interviewees but left some of them early. You have collected over ${resultScore}% of the information and you’re still much better informed than the average person!`;
      } else if (resultScore >= 25) {
        return `You’ve spoken to most of the interviewees and collected ${resultScore}% of the information.  You can revisit the interviews or have your say now.`;
      }
      return `Did the interviewees bore you or are you in a rush? You have collected ${resultScore}% of the information.  Remember that you can always come back for more chat.`;
    };
    return [
      <Topbar
        handleDetails={this.toggleDetailsModal}
        handleBack={() => this.props.router.push(`/${story.id}/listing`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="x" flex={[1, 0, `${100 / 2}%`]}>
          <PageSubtitle typo="h3">{getResultScore()}</PageSubtitle>
          <Separator size="l" silent />
          <Actionbar>
            <Action
              fixed
              onClick={() => this.props.router.push(`/${story.id}/listing`)}
              primary
            >
              Revisit the interviews
            </Action>
            <Action
              fixed
              onClick={() => this.props.router.push(`/${story.id}/poll`)}
              primary
            >
              Have your say
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