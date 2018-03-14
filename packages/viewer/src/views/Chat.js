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

const Topbar = css(Container)`
  background: ${color.white};
  border-bottom: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`;

const TopbarHolder = css(Container)`
  align-content: flex-end;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PageBody = css(Container)`
  padding-top: 80px;
`;

const PageFoot = css(Container)`
  ${setSpace("pvm")};
`;

const ActionbarHelper = css(Container)`
  ${setSpace("mhm")};
  ${setSpace("mvx")};
  ${setSpace("phm")};
  background: ${color.white};
  border-radius: ${radius.a};
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 46px;
  position: absolute;
  right: 46px;
  top: 0;
  z-index: 5;
  & > * {
    ${setSpace("mhx")};
  }
  ${({ emo }) =>
    !emo
      ? `
    & > * { flex-basis: 50%; width: auto; max-width: none; }
  `
      : `
        justify-content: space-around;
      `};
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
    this.respondWithADiss = this.respondWithADiss.bind(this);
    this.respondWithAnEmo = this.respondWithAnEmo.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleEmotHelper = this.toggleEmotHelper.bind(this);
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
    this.toggleMoreHelper = this.toggleMoreHelper.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  toggleIntervieweeModal() {
    this.setState({ intervieweeModal: !this.state.intervieweeModal });
  }
  toggleEmotHelper() {
    this.setState({ emotHelper: !this.state.emotHelper, moreHelper: false });
  }
  toggleMoreHelper() {
    this.setState({ moreHelper: !this.state.moreHelper, emotHelper: false });
  }
  respondWithAnEmo(emo) {
    this.setState({ emotHelper: false });
    console.log(emo);
  }
  respondWithADiss() {
    this.setState({ moreHelper: false });
    console.log("respondWithADiss");
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
        <Topbar>
          <TopbarHolder limit="m" padded>
            <Action iconic onClick={() => this.props.router.push("/listing")}>
              <Icon name="arrow-left" size="x" />
            </Action>
            <Action onClick={this.toggleIntervieweeModal}>
              <Tip title={interviewee.name}>
                <Avatar image={interviewee.avatar} />
              </Tip>
            </Action>
            <Action iconic onClick={this.toggleDetailsModal}>
              <Icon name="info" />
            </Action>
          </TopbarHolder>
        </Topbar>
        <PageBody flex={[1, 1, `100%`]}>Body</PageBody>
        <PageFoot flex={[0, 0, `auto`]}>
          <Container limit="x" padded>
            <Actionbar satellite="both">
              <Action iconic onClick={this.toggleMoreHelper} secondary>
                <Icon name="vdots" />
              </Action>
              <Action primary fixed>
                Move on
              </Action>
              <Action iconic onClick={this.toggleEmotHelper} secondary>
                <Icon name="smile" />
              </Action>
            </Actionbar>
            {this.state.moreHelper ? (
              <ActionbarHelper shift dir="row">
                <Action fixed primary onClick={this.respondWithADiss}>
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
              <ActionbarHelper padded shift emo>
                <Action iconic onClick={() => this.respondWithAnEmo("smile")}>
                  <Icon name="smile" size="l" />
                </Action>
                <Action iconic onClick={() => this.respondWithAnEmo("sad")}>
                  <Icon name="sad" size="l" />
                </Action>
                <Action iconic onClick={() => this.respondWithAnEmo("angry")}>
                  <Icon name="angry" size="l" />
                </Action>
                <Action iconic onClick={() => this.respondWithAnEmo("shocked")}>
                  <Icon name="shocked" size="l" />
                </Action>
                <Action iconic onClick={() => this.respondWithAnEmo("neutral")}>
                  <Icon name="neutral" size="l" />
                </Action>
                <Action
                  iconic
                  onClick={() => this.respondWithAnEmo("wondering")}
                >
                  <Icon name="wondering" size="l" />
                </Action>
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
