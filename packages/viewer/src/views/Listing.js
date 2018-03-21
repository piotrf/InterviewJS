/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Avatar,
  Icon,
  Container,
  Separator,
  Text,
  PageTitle,
  Tip,
  color,
  setSpace,
  time
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
  align-items: center;
  background: ${color.white};
  border: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 5;
  ${PageTitle} {
    color: ${color.blueBlk};
  }
`;

const PageBody = css(Container)`
  border-bottom: 1px solid ${color.greyHL};
  border-left: 1px solid ${color.greyHL};
  border-right: 1px solid ${color.greyHL};
  padding-top: 80px;
  width: 100%;
`;

const Interviewees = css.ul`
  display: block;
  width: 100%;
`;

const Interviewee = css.li`
  border-bottom: 1px solid ${color.greyWt};
  cursor: pointer;
  display: block;
  transition: background ${time.m};
  &:hover {
    background: ${color.greyWt};
  }
  & button {
    ${setSpace("mls")};
  }
  ${Avatar} {
    ${setSpace("mrm")};
  }
`;

const IntervieweeName = css(Text)`
  color: ${color.blueBlk};
`;
const IntervieweeTitle = css(Text)`
  color: ${color.greyD};
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = { intervieweeModal: null, storyDetailsModal: false };
    this.startChat = this.startChat.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
  }
  toggleDetailsModal(e) {
    if (e) e.stopPropagation();
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  toggleIntervieweeModal(e, target) {
    e.stopPropagation();
    if (target !== null) {
      this.setState({ intervieweeModal: target });
    } else {
      this.setState({ intervieweeModal: null });
    }
  }
  startChat(e, target) {
    e.stopPropagation();
    this.props.router.push(`/story/chat/${target}`);
  }
  render() {
    const { story } = this.props;
    return [
      <Page key="page">
        <Topbar limit="m" padded>
          <Action
            iconic
            onClick={() => this.props.router.push("/story/context")}
          >
            <Icon name="arrow-left" />
          </Action>
          <PageTitle typo="h2">Interviewees</PageTitle>
          <Action iconic onClick={(e) => this.toggleDetailsModal(e)}>
            <Icon name="info" />
          </Action>
        </Topbar>
        <PageBody limit="m" flex={[1, 1, `100%`]}>
          <Interviewees>
            {story.interviewees.map((interviewee, i) => (
              <Interviewee
                key={interviewee.id}
                onClick={(e) => this.startChat(e, interviewee.id)}
              >
                <Container limit="m" padded>
                  <Container dir="row">
                    <Container flex={[1, 0, "auto"]}>
                      <Avatar size="l" image={interviewee.avatar} />
                    </Container>
                    <Container flex={[0, 1, "100%"]} align="left">
                      <IntervieweeName typo="p1">
                        {interviewee.name}
                      </IntervieweeName>
                      <Separator size="n" silent />
                      <IntervieweeTitle typo="p5">
                        {interviewee.title}
                      </IntervieweeTitle>
                    </Container>
                    <Container flex={[1, 0, "auto"]}>
                      <Tip title="Get info">
                        <Action
                          iconic
                          onClick={(e) => this.toggleIntervieweeModal(e, i)}
                          secondary
                        >
                          <Icon name="info" />
                        </Action>
                      </Tip>
                      <Tip title="Start chatting">
                        <Action
                          iconic
                          onClick={(e) => this.startChat(e, interviewee.id)}
                          primary
                        >
                          <Icon name="bubbles" />
                        </Action>
                      </Tip>
                    </Container>
                  </Container>
                </Container>
              </Interviewee>
            ))}
          </Interviewees>
        </PageBody>
      </Page>,
      this.state.intervieweeModal !== null ? (
        <IntervieweeModal
          {...this.props}
          handleClose={(e) => this.toggleIntervieweeModal(e, null)}
          handleSubmit={() =>
            this.props.router.push(
              `/story/chat/${
                story.interviewees[this.state.intervieweeModal].id
              }`
            )
          }
          interviewee={story.interviewees[this.state.intervieweeModal]}
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
  story: shape({
    title: string
  })
};

ChatView.defaultProps = {
  router: null,
  story: {}
};