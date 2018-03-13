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
    this.state = { intervieweeModal: null };
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
    this.startChat = this.startChat.bind(this);
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
      <Topbar
        handleDetails={() => this.props.router.push(`/details`)}
        handleBack={() => this.props.router.push(`/context`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 2}%`]}>
          <Container limit="x">
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
                          this.props.router.push(`/chat/${interviewee.id}`)
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
                      <Tip title="Get info">
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
          </Container>
          <Separator size="l" silent />
          <Actionbar>
            <Action
              fixed
              onClick={() =>
                this.props.router.push(`/chat/${story.interviewees[0].id}`)
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
              `/chat/${story.interviewees[this.state.intervieweeModal].id}`
            )
          }
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
