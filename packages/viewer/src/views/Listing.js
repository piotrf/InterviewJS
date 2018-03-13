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
  PageTitle,
  Tip,
  color,
  setSpace
} from "interviewjs-styleguide";

import { IntervieweeModal } from "../partials";

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

const Interviewees = css.ul`
  display: block;
  width: 100%;
`;

const Interviewee = css.li`
  border-bottom: 1px solid ${color.greyWt};
  display: block;
  & button {
    ${setSpace("mls")};
  }
  ${Avatar} {
    ${setSpace("mrm")};
    cursor: pointer;
  }
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = { intervieweeModal: null };
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
  }
  toggleIntervieweeModal(target) {
    if (target !== null) {
      this.setState({ intervieweeModal: target });
    } else {
      this.setState({ intervieweeModal: null });
    }
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
              <Action iconic onClick={() => this.props.router.push("/details")}>
                i
              </Action>
            </Actionbar>
          </Container>
        </PageHead>
        <PageBody flex={[1, 1, `100%`]}>
          <Interviewees>
            {story.interviewees.map((interviewee, i) => (
              <Interviewee key={interviewee.id}>
                <Container limit="m" padded>
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
                      {interviewee.name}
                    </Container>
                    <Container flex={[1, 0, "auto"]}>
                      <Tip title="Get info">
                        <Action
                          secondary
                          iconic
                          onClick={() => this.toggleIntervieweeModal(i)}
                        >
                          <Icon name="info" />
                        </Action>
                      </Tip>
                      <Tip title="Start chatting">
                        <Action
                          primary
                          iconic
                          onClick={() =>
                            this.props.router.push(`/chat/${interviewee.id}`)
                          }
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
          handleClose={() => this.toggleIntervieweeModal(null)}
          interviewee={story.interviewees[this.state.intervieweeModal]}
          isOpen={this.state.intervieweeModal !== null}
          key="intervieweeModal"
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
