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

const PageHead = css(Container)`
  border-bottom: 1px solid ${color.greyHL};
  ${PageTitle} {
    color: ${color.blueBlk};
  }
`;

const PageBody = css(Container)`
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
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
    this.startChat = this.startChat.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
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
    this.props.router.push(`/chat/${target}`);
  }
  render() {
    const { story } = this.props;
    return [
      <Page key="page">
        <PageHead flex={[0, 0, `auto`]}>
          <Container limit="m" padded>
            <Actionbar satellite="both">
              <Action iconic onClick={() => this.props.router.push("/context")}>
                <Icon name="arrow-left" />
              </Action>
              <PageTitle typo="h2">Interviewees</PageTitle>
              <Action iconic onClick={this.toggleDetailsModal}>
                i
              </Action>
            </Actionbar>
          </Container>
        </PageHead>
        <PageBody flex={[1, 1, `100%`]}>
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
              `/chat/${story.interviewees[this.state.intervieweeModal].id}`
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
