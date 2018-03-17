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
  color
} from "interviewjs-styleguide";

import { IntervieweeModal, StoryDetailsModal, Storyline } from "../partials";

const Page = css.div`
  background: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageBody = css(Container)`
  margin-top: 80px;
  padding: 0;
`;

const PageFoot = css(Container)`
  border: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionbar: "scripted",
      currentItem: 0,
      hideActionbar: true,
      intervieweeModal: false,
      storyDetailsModal: false
    };
    this.onBubbleRender = this.onBubbleRender.bind(this);
    this.respondWithADiss = this.respondWithADiss.bind(this);
    this.respondWithAnEmo = this.respondWithAnEmo.bind(this);
    this.respondWithScriptedAction = this.respondWithScriptedAction.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleToolbar = this.toggleToolbar.bind(this);

    /* assign some globally necessary data */
    const { interviewees } = this.props.story;
    const intervieweeIndex = interviewees.findIndex(
      (item) => item.id === this.props.params.chatId
    );
    this.interviewee = interviewees[intervieweeIndex];
    this.story = this.props.story;
    this.storyline = interviewees[intervieweeIndex].storyline;
  }
  onBubbleRender() {
    const { currentItem } = this.state;
    const thisBubble = this.storyline[currentItem];
    const nextBubble = this.storyline[currentItem + 1];
    const lastBubble = this.storyline.length;
    if (currentItem < lastBubble - 1) {
      if (thisBubble.role === "user" && nextBubble.role === "interviewee") {
        this.setState({ currentItem: currentItem + 1 });
      } else if (
        thisBubble.role === "interviewee" &&
        nextBubble.role === "interviewee"
      ) {
        setTimeout(() => this.setState({ currentItem: currentItem + 1 }), 1050);
      } else if (
        thisBubble.role === "interviewee" &&
        nextBubble.role === "user"
      ) {
        setTimeout(() => this.setState({ hideActionbar: false }), 1400);
      }
    }
    return null;
  }
  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  toggleToolbar(toolbar) {
    this.setState({ [toolbar]: !this.state[toolbar] });
  }

  /* response handlers */

  respondWithScriptedAction(type) {
    console.log("respondWithScriptedAction: ", type);
    if (this.state.currentItem < this.storyline.length - 1) {
      this.setState({
        currentItem: this.state.currentItem + 1,
        hideActionbar: true
      });
    } else console.log("end of the story");
  }
  respondWithADiss() {
    this.setState({ moreHelper: false });
    console.log("respondWithADiss");
  }
  respondWithAnEmo(emo) {
    this.setState({ emotHelper: false });
    console.log("respondWithAnEmo: ", emo);
  }

  render() {
    const { currentItem } = this.state;

    const runAwayActions = [
      <Action
        fixed
        key="talkToSomebodyElse"
        onClick={this.respondWithADiss}
        primary
      >
        I want to talk to somebody else
      </Action>,
      <Action
        fixed
        key="doneChatting"
        onClick={() => this.props.router.push("/story/outro")}
        primary
        tone="negative"
      >
        I’m done chatting
      </Action>
    ];

    const emoActions = [
      <Action iconic onClick={() => this.respondWithAnEmo("smile")} key="smile">
        <Icon name="smile" size="l" />
      </Action>,
      <Action iconic onClick={() => this.respondWithAnEmo("sad")} key="sad">
        <Icon name="sad" size="l" />
      </Action>,
      <Action iconic onClick={() => this.respondWithAnEmo("angry")} key="angry">
        <Icon name="angry" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.respondWithAnEmo("shocked")}
        key="shocked"
      >
        <Icon name="shocked" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.respondWithAnEmo("neutral")}
        key="neutral"
      >
        <Icon name="neutral" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.respondWithAnEmo("wondering")}
        key="wondering"
      >
        <Icon name="wondering" size="l" />
      </Action>
    ];

    const renderUserActions = () => {
      const thisBubbleI = currentItem;
      const lastBubbleI = this.storyline.length;
      const nextBubble = this.storyline[currentItem + 1];
      const isActiveActionbarEmot = this.state.actionbar === "emot";
      const isActiveActionbarRunaway = this.state.actionbar === "runaway";
      const isActionbarHidden = this.state.hideActionbar;
      if (thisBubbleI !== lastBubbleI && !isActionbarHidden) {
        if (nextBubble.role === "user") {
          if (isActiveActionbarEmot) {
            return emoActions;
          } else if (isActiveActionbarRunaway) {
            return runAwayActions;
          }
          return nextBubble.content.map(
            (action) =>
              action.enabled ? (
                <Action
                  fixed
                  key={action.type}
                  onClick={() => this.respondWithScriptedAction(action.type)}
                  primary
                >
                  {action.value}
                </Action>
              ) : null
          );
        }
      } else if (lastBubbleI - thisBubbleI === 1) {
        return runAwayActions;
      }
      return null;
    };

    return [
      <Page key="page">
        <Topbar limit="m" padded>
          <Action
            iconic
            onClick={() => this.props.router.push("/story/listing")}
          >
            <Icon name="arrow-left" />
          </Action>
          <Action onClick={() => this.toggleModal("intervieweeModal")}>
            <Tip title={this.interviewee.name}>
              <Avatar image={this.interviewee.avatar} size="l" />
            </Tip>
          </Action>
          <Action iconic onClick={() => this.toggleModal("storyDetailsModal")}>
            <Icon name="info" />
          </Action>
        </Topbar>
        <PageBody flex={[1, 1, `100%`]}>
          <Storyline
            carryOn={this.carryOn}
            currentItem={currentItem}
            interviewee={this.interviewee}
            onBubbleRender={this.onBubbleRender}
            storyline={this.storyline}
          />
        </PageBody>
        <PageFoot limit="m" flex={[0, 0, `80px`]} padded>
          <Actionbar satellite="both">
            <Action
              iconic
              active={this.state.actionbar === "runaway"}
              onClick={
                this.state.actionbar !== "runaway"
                  ? () => this.setState({ actionbar: "runaway" })
                  : () => this.setState({ actionbar: "scripted" })
              }
              secondary
            >
              <Icon
                name={this.state.actionbar === "runaway" ? `cross` : `vdots`}
              />
            </Action>
            {renderUserActions()}
            <Action
              iconic
              active={this.state.actionbar === "emot"}
              onClick={
                this.state.actionbar !== "emot"
                  ? () => this.setState({ actionbar: "emot" })
                  : () => this.setState({ actionbar: "scripted" })
              }
              secondary
            >
              <Icon
                name={this.state.actionbar === "emot" ? `cross` : `smile`}
              />
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>,
      this.state.intervieweeModal ? (
        <IntervieweeModal
          {...this.props}
          cta="Get back to chat"
          handleClose={() => this.toggleModal("intervieweeModal")}
          handleSubmit={() => this.toggleModal("intervieweeModal")}
          interviewee={this.interviewee}
          isOpen={this.state.intervieweeModal !== null}
          key="intervieweeModal"
        />
      ) : null,
      this.state.storyDetailsModal ? (
        <StoryDetailsModal
          handleClose={() => this.toggleModal("storyDetailsModal")}
          isOpen={this.state.storyDetailsModal}
          key="detailsModal"
          story={this.story}
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
