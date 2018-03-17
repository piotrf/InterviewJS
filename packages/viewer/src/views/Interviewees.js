/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Icon,
  Separator,
  Text,
  Tip,
  color,
  setSpace
} from "interviewjs-styleguide";

import {
  Cover,
  IntervieweeModal,
  Page,
  PageBody,
  PageHead,
  StoryDetailsModal,
  Topbar
} from "../partials";

const Interviewees = css.ul`
  display: block;
  width: 100%;
`;

const Interviewee = css.li`
  ${setSpace("pvm")};
  border-bottom: 1px solid ${color.flareHL};
  cursor: pointer;
  display: block;
  & button {
    ${setSpace("mls")};
  }
  ${Avatar} {
    ${setSpace("mrm")};
  }
`;

const IntervieweeTitle = css(Text)`
  color: ${color.flareD};
`;

export default class ContextView extends Component {
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
      <Topbar
        handleDetails={(e) => this.toggleDetailsModal(e)}
        handleBack={() => this.props.router.push(`/story/context`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="x" flex={[1, 0, `${100 / 2}%`]}>
          <Interviewees>
            {story.interviewees.map((interviewee, i) => (
              <Interviewee
                key={interviewee.id}
                onClick={(e) => this.startChat(e, interviewee.id)}
              >
                <Container dir="row">
                  <Container flex={[1, 0, "auto"]}>
                    <Avatar
                      size="l"
                      image={interviewee.avatar}
                      onClick={() =>
                        this.props.router.push(`/story/chat/${interviewee.id}`)
                      }
                    />
                  </Container>
                  <Container flex={[0, 1, "100%"]} align="left">
                    <Text typo="p1">{interviewee.name}</Text>
                    <Separator silent size="n" />
                    <IntervieweeTitle typo="p5">
                      {interviewee.title}
                    </IntervieweeTitle>
                  </Container>
                  <Container flex={[1, 0, "auto"]}>
                    <Tip title="About this interviewee">
                      <Action
                        iconic
                        inverted
                        onClick={(e) => this.toggleIntervieweeModal(e, i)}
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
              </Interviewee>
            ))}
          </Interviewees>
          <Separator size="l" silent />
          <Actionbar>
            <Action
              fixed
              onClick={() =>
                this.props.router.push(
                  `/story/chat/${story.interviewees[0].id}`
                )
              }
              primary
            >
              Start your first interview
            </Action>
          </Actionbar>
        </PageBody>
      </Page>,
      this.state.intervieweeModal !== null ? (
        <IntervieweeModal
          {...this.props}
          handleClose={(e) => this.toggleIntervieweeModal(e, null)}
          interviewee={story.interviewees[this.state.intervieweeModal]}
          isOpen={this.state.intervieweeModal !== null}
          key="intervieweeModal"
          handleSubmit={() =>
            this.props.router.push(
              `/story/chat/${
                story.interviewees[this.state.intervieweeModal].id
              }`
            )
          }
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

ContextView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ContextView.defaultProps = {
  router: null,
  story: {}
};
