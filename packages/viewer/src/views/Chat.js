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

const PageFoot = css(Container)`
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = { intervieweeModal: false };
    this.toggleIntervieweeModal = this.toggleIntervieweeModal.bind(this);
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
              <Action iconic onClick={() => this.props.router.push("/details")}>
                i
              </Action>
            </Actionbar>
          </Container>
        </PageHead>
        <PageBody flex={[1, 1, `100%`]} />
        <PageFoot flex={[0, 0, `auto`]} padded>
          <Actionbar satellite="both">
            <Action iconic secondary>
              …
            </Action>
            <Action primary>Move on</Action>
            <Action iconic secondary>
              :)
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>,
      this.state.intervieweeModal ? (
        <IntervieweeModal
          {...this.props}
          handleClose={this.toggleIntervieweeModal}
          interviewee={interviewee}
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
