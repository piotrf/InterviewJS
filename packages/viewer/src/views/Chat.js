/* eslint react/forbid-prop-types: 0 */
import { object, shape, string } from "prop-types";
import { withRouter } from "react-router";
import css from "styled-components";
import React, { Component } from "react";
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

class ChatView extends Component {
  constructor(props) {
    super(props);

    /* assign some globally necessary data */
    const { interviewees } = this.props.story;
    const intervieweeIndex = interviewees.findIndex(
      (item) => item.id === this.props.params.chatId
    );

    this.interviewee = interviewees[intervieweeIndex];
    this.story = this.props.story;
    this.storyline = interviewees[intervieweeIndex].storyline;

    const localHistory = JSON.parse(
      localStorage.getItem(`history-${this.story.id}-${this.interviewee.id}`)
    );

    this.state = {
      actionbar: "scripted",
      hideActionbar: true,
      history: localHistory || [],
      intervieweeModal: false,
      storyDetailsModal: false
    };
    this.initHistory = this.initHistory.bind(this);
    this.onBubbleRender = this.onBubbleRender.bind(this);
    this.toggleToolbar = this.toggleToolbar.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
  }
  componentDidMount() {
    this.initHistory();
  }
  componentDidUpdate(prevProps) {
    return prevProps.location.pathname !== this.props.location.pathname
      ? this.render()
      : null;
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  toggleToolbar(toolbar) {
    this.setState({ [toolbar]: !this.state[toolbar] });
  }

  initHistory() {
    const firstStorlineItem = this.storyline[0];
    const noHistory = this.state.history.length === 0;
    const startsWithInterviewee = firstStorlineItem.role === "interviewee";
    if (noHistory && startsWithInterviewee) {
      const firstBubbleRef = {
        i: 0,
        role: firstStorlineItem.role,
        type: "init"
      };
      this.setState({ history: [firstBubbleRef] });
    }
  }

  onBubbleRender() {
    const { history } = this.state;
    const thisHistoryItem = history[history.length - 1];

    const thisBubbleI = thisHistoryItem.i;
    const lastBubbleI = this.storyline.length;

    if (thisBubbleI < lastBubbleI - 1) {
      const { role, type } = thisHistoryItem;
      if (type === "diss") {
        this.updateHistory("switchTo");
      } else if (type === "nvm") {
        this.updateHistory("followup");
      } else if (type === "action") {
        const { value } = thisHistoryItem; // 1 is explore, 0 is ignore
        if (value === 1) {
          this.updateHistory("followup");
        } else if (value === 0) {
          this.updateHistory("followup"); // TODO but should skip to the next unnested
        }
        return null;
      } else if (role === "interviewee") {
        const { i } = thisHistoryItem;
        const nextBubble = this.storyline[thisBubbleI + 1];
        if (
          i < this.storyline.length &&
          this.storyline[i + 1].role === "interviewee" &&
          nextBubble.role === "interviewee"
        ) {
          setTimeout(() => this.updateHistory("followup"), 1050);
        } else if (nextBubble.role === "user") {
          setTimeout(() => this.setState({ hideActionbar: false }), 1400);
        }
      }
    }
  }

  updateHistory(type, payload) {
    this.setState({ hideActionbar: true });

    const { history } = this.state;
    const thisHistoryItem = history[history.length - 1];

    if (type === "diss") {
      const diss = {
        i: thisHistoryItem.i,
        role: "user",
        type: "diss",
        value: payload
      };
      history.push(diss);
    } else if (type === "switchTo") {
      this.setState({ actionbar: "switchTo" });
      const switchTo = {
        i: thisHistoryItem.i,
        role: "system",
        type: "switchTo"
      };
      history.push(switchTo);
    } else if (type === "emoji") {
      this.setState({ actionbar: "scripted" });
      const emoji = {
        i: thisHistoryItem.i,
        role: "user",
        type: "emoji",
        value: payload
      };
      history.push(emoji);
    } else if (type === "nvm") {
      this.setState({ actionbar: "scripted" });
      const nvm = {
        i: thisHistoryItem.i - 1,
        role: "user",
        type: "nvm",
        value: payload
      };
      history.push(nvm);
    } else if (type === "quit") {
      const quit = {
        role: "user",
        type: "quit"
      };
      history.push(quit);
    } else if (type === "ignore") {
      this.setState({ actionbar: "scripted" });
      const ignore = {
        i: thisHistoryItem.i + 1,
        role: "user",
        type: "action",
        value: payload
      };
      history.push(ignore);
    } else if (type === "explore") {
      const explore = {
        i: thisHistoryItem.i + 1,
        role: "user",
        type: "action",
        value: payload
      };
      history.push(explore);
    } else if (type === "followup") {
      const followup = {
        i: thisHistoryItem.i + 1,
        role: "interviewee",
        type: "followup"
      };
      history.push(followup);
    }

    localStorage.setItem(
      `history-${this.story.id}-${this.interviewee.id}`,
      JSON.stringify(history)
    );

    return this.setState({ history });
  }

  render() {
    const { history } = this.state;

    const isLastBubble = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];
        const thisBubbleI = thisHistoryItem.i;
        const lastBubbleI = this.storyline.length - 1;
        return thisBubbleI === lastBubbleI;
      }
      return false;
    };
    const isNvmBubble = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];
        return thisHistoryItem.type === "switchTo";
      }
      return false;
    };

    const runAwayActions = [
      <Action
        fixed
        key="talkToSomebodyElse"
        onClick={() =>
          this.updateHistory("diss", "I want to talk to somebody else")
        }
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
    const nvmActions = [
      <Action
        fixed
        key="neverMind"
        onClick={() => this.updateHistory("nvm", "Nevermind")}
        primary
      >
        Nevermind
      </Action>
    ];
    const emoActions = [
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "smile")}
        key="smile"
      >
        <Icon name="smile" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "sad")}
        key="sad"
      >
        <Icon name="sad" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "angry")}
        key="angry"
      >
        <Icon name="angry" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "shocked")}
        key="shocked"
      >
        <Icon name="shocked" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "neutral")}
        key="neutral"
      >
        <Icon name="neutral" size="l" />
      </Action>,
      <Action
        iconic
        onClick={() => this.updateHistory("emoji", "wondering")}
        key="wondering"
      >
        <Icon name="wondering" size="l" />
      </Action>
    ];
    const renderUserActions = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];

        const thisBubbleI = thisHistoryItem.i;
        const lastBubbleI = this.storyline.length;

        const isActiveActionbarEmot = this.state.actionbar === "emot";
        const isActiveActionbarRunaway = this.state.actionbar === "runaway";
        const isLastBubbleSwitchTo = thisHistoryItem.type === "switchTo";

        if (isLastBubbleSwitchTo) {
          return nvmActions;
        } else if (thisBubbleI === lastBubbleI - 1) {
          return runAwayActions;
          // } else if (thisBubbleI < lastBubbleI - 1 && !this.state.hideActionbar) {
        }
        const nextBubble = this.storyline[thisBubbleI + 1];
        if (nextBubble.role === "user") {
          if (isActiveActionbarEmot) {
            return emoActions;
          } else if (isActiveActionbarRunaway) {
            return runAwayActions;
          }
          return nextBubble.content.map(
            (action, i) =>
              action.enabled ? (
                <Action
                  fixed
                  key={action.type}
                  onClick={() => this.updateHistory(action.type, i)}
                  primary
                >
                  {action.value}
                </Action>
              ) : null
          );
        }
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
            {...this.props}
            history={this.state.history}
            interviewee={this.interviewee}
            location={this.props.location}
            onBubbleRender={this.onBubbleRender}
            story={this.story}
            storyline={this.storyline}
          />
        </PageBody>
        <PageFoot limit="m" flex={[0, 0, `80px`]} padded>
          <Actionbar
            satellite={!isLastBubble() && !isNvmBubble() ? "both" : null}
          >
            {!isLastBubble() && !isNvmBubble() ? (
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
            ) : null}
            {renderUserActions()}
            {!isLastBubble() && !isNvmBubble() ? (
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
            ) : null}
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

export default withRouter(ChatView);
