/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Actionbar,
  Action,
  Avatar,
  Icon,
  Container,
  Tip,
  color,
  radius,
  setSpace
} from "interviewjs-styleguide";

import { IntervieweeModal, StoryDetailsModal } from "../partials";

const Page = css.div`
  background: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = css(Container)`
  border-bottom: 1px solid ${color.greyHL};
`;

const PageBody = css(Container)`
`;

const PageFoot = css(Container)`
  ${setSpace("pvm")};
`;

const ActionbarHelper = css(Container)`
  ${setSpace("mhm")};
  ${setSpace("mvx")};
  background: ${color.white};
  border-radius: ${radius.a};
  bottom: 0;
  left: 46px;
  position: absolute;
  right: 46px;
  top: 0;
  z-index: 5;
  & > * {
    ${setSpace("mhx")};
  }
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotHelper: false,
      intervieweeModal: false,
      moreHelper: false,
      storyDetailsModal: false
    };
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  toggleIntervieweeModal() {
    this.setState({ intervieweeModal: !this.state.intervieweeModal });
  }
  render() {
    const { story } = this.props;
    const { interviewees } = story;
    const { chatId } = this.props.params;
    const intervieweeIndex = interviewees.findIndex(
      (interviewee) => interviewee.id === chatId
    );
    const interviewee = interviewees[intervieweeIndex];
    return [
      <Page key="page">
        <PageHead flex={[0, 0, `auto`]}>
          <Container limit="m" padded>
            <Actionbar satellite="both">
              <Action iconic onClick={() => this.props.router.push("/listing")}>
                <Icon name="arrow-left" />
              </Action>
              <Action onClick={this.toggleIntervieweeModal}>
                <Tip title={interviewee.name}>
                  <Avatar image={interviewee.avatar} />
                </Tip>
              </Action>
              <Action iconic onClick={this.toggleDetailsModal}>
                i
              </Action>
            </Actionbar>
          </Container>
        </PageHead>
        <PageBody flex={[1, 1, `100%`]}>Body</PageBody>
        <PageFoot flex={[0, 0, `auto`]}>
          <Container limit="x" padded>
            <Actionbar satellite="both">
              <Action
                iconic
                onClick={() =>
                  this.setState({ moreHelper: !this.state.moreHelper })
                }
                secondary
              >
                <Icon name="vdots" />
              </Action>
              <Action primary fixed>
                Move on
              </Action>
              <Action
                iconic
                onClick={() =>
                  this.setState({ emotHelper: !this.state.emotHelper })
                }
                secondary
              >
                <Icon name="smile" />
              </Action>
            </Actionbar>
            {this.state.moreHelper ? (
              <ActionbarHelper shift dir="row">
                <Action fixed primary>
                  I want to talk to somebody else
                </Action>
                <Action
                  fixed
                  onClick={() => this.props.router.push("/outro")}
                  primary
                  tone="negative"
                >
                  I’m done chatting
                </Action>
              </ActionbarHelper>
            ) : null}
            {this.state.emotHelper ? (
              <ActionbarHelper padded shift>
                Emot
              </ActionbarHelper>
            ) : null}
          </Container>
        </PageFoot>
      </Page>,
      this.state.intervieweeModal ? (
        <IntervieweeModal
          {...this.props}
          cta="Get back to chat"
          handleClose={this.toggleIntervieweeModal}
          handleSubmit={this.toggleIntervieweeModal}
          interviewee={interviewee}
          isOpen={this.state.intervieweeModal !== null}
          key="intervieweeModal"
        />
      ) : null,
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

ChatView.propTypes = {
  router: object,
  params: shape({ chatId: string }).isRequired,
  story: shape({
    title: string
  })
};

ChatView.defaultProps = {
  router: null,
  story: {}
};
