/* eslint react/forbid-prop-types: 0 */
import { object, shape, string } from "prop-types";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { Actionbar, Action, Avatar, Icon, Tip } from "interviewjs-styleguide";
import { IntervieweeModal, StoryDetailsModal, Storyline } from "../partials/";
import {
  EmoActions,
  NvmActions,
  Page,
  PageBody,
  PageFoot,
  Topbar,
  RunAwayActions
} from "./chat/";

class ChatView extends Component {
  constructor(props) {
    super(props);

    const { interviewees } = this.props.story;
    const intervieweeIndex = interviewees.findIndex(
      (item) => item.id === this.props.params.chatId
    );
    const interviewee = interviewees[intervieweeIndex];
    const { story } = this.props;

    const localHistory = JSON.parse(
      localStorage.getItem(`history-${story.id}-${interviewee.id}`)
    );

    this.state = {
      actionbar: "scripted",
      currentIntervieweeId: this.props.params.chatId,
      history: localHistory || [],
      intervieweeModal: false,
      storyDetailsModal: false
    };
    this.findIntervieweeId = this.findIntervieweeId.bind(this);
    this.initHistory = this.initHistory.bind(this);
    this.onBubbleRender = this.onBubbleRender.bind(this);
    this.switchChat = this.switchChat.bind(this);
    this.toggleToolbar = this.toggleToolbar.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
  }
  componentDidMount() {
    this.initHistory();
  }
  onBubbleRender() {
    const { history } = this.state;
    const thisHistoryItem = history[history.length - 1];

    const { interviewees } = this.props.story;
    const intervieweeIndex = interviewees.findIndex(
      (item) => item.id === this.props.params.chatId
    );
    const { storyline } = interviewees[intervieweeIndex];

    const thisBubbleI = thisHistoryItem.i;
    const lastBubbleI = storyline.length;

    if (thisBubbleI < lastBubbleI - 1) {
      const { role, type } = thisHistoryItem;
      if (type === "action") {
        const { value } = thisHistoryItem; // 1 is explore, 0 is ignore
        if (value === 1) {
          this.updateHistory("followup");
        } else if (value === 0) {
          this.updateHistory("followup"); // TODO but should skip to the next unnested
        }
        return null;
      } else if (role === "interviewee") {
        const { i } = thisHistoryItem;
        const nextBubble = storyline[thisBubbleI + 1];
        if (
          i < storyline.length &&
          storyline[i + 1].role === "interviewee" &&
          nextBubble.role === "interviewee"
        ) {
          setTimeout(() => this.updateHistory("followup"), 1050);
        } else if (nextBubble.role === "user") {
          setTimeout(() => this.setState({ actionbar: "scripted" }), 1400);
        }
      }
    }
    return null;
  }

  initHistory() {
    const { interviewees } = this.props.story;
    const intervieweeIndex = interviewees.findIndex(
      (item) => item.id === this.props.params.chatId
    );
    const { storyline } = interviewees[intervieweeIndex];
    const firstStorlineItem = storyline[0];
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

  switchChat(chatId) {
    const { story } = this.props;

    // get the other interviewee’s history saved in localStorage
    const localHistory = JSON.parse(
      localStorage.getItem(`history-${story.id}-${chatId}`)
    );
    this.setState({
      actionbar: "scripted",
      currentIntervieweeId: chatId,
      history: localHistory || []
    });
    this.props.router.push(`/${story.id}/chat/${chatId}`);
  }

  toggleToolbar(toolbar) {
    this.setState({ [toolbar]: !this.state[toolbar] });
  }
  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }

  findIntervieweeId(id) {
    const { interviewees } = this.props.story;
    const loopThrough = (loopId) =>
      interviewees.findIndex((item) => item.id === loopId);
    return id ? loopThrough(id) : loopThrough(this.props.params.chatId);
  }

  updateHistory(type, payload) {
    // hide actionbar till onBubbleRender will trigger another updateHistory loop that will enable it
    this.setState({ actionbar: null });

    // grab necessary information
    const { history } = this.state;
    const { story } = this.props;
    const { interviewees } = story;
    const interviewee = interviewees[this.findIntervieweeId()];
    const thisHistoryItem = history[history.length - 1];

    // local redux-y way of handling updateHistory logic
    if (type === "switchTo") {
      this.setState({ actionbar: "scripted" });
      const switchTo = {
        i: thisHistoryItem.i - 1,
        role: "system",
        type: "switchTo"
      };
      history.push(switchTo);
    } else if (type === "nvm") {
      this.setState({ actionbar: "scripted" });
      history.splice(-1, 1);
    } else if (type === "emoji") {
      this.setState({ actionbar: "scripted" });
      const emoji = {
        i: thisHistoryItem.i,
        role: "user",
        type: "emoji",
        value: payload
      };
      history.push(emoji);
    } else if (type === "quit") {
      const quit = {
        role: "user",
        type: "quit"
      };
      history.push(quit);
    } else if (type === "ignore") {
      this.setState({ actionbar: null });
      const ignore = {
        i: thisHistoryItem.i + 1,
        role: "user",
        type: "action",
        value: payload
      };
      history.push(ignore);
    } else if (type === "explore") {
      this.setState({ actionbar: null });
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

    // save updated history in localStorage unless in switch interviewee loop
    if (type !== "nvm" && type !== "switchTo") {
      localStorage.setItem(
        `history-${story.id}-${interviewee.id}`,
        JSON.stringify(history)
      );
    }

    // update history state to re-render storyline
    this.setState({ history });
  }

  render() {
    const { history } = this.state;
    const { story } = this.props;
    const { interviewees } = story;
    const { storyline } = interviewees[this.findIntervieweeId()];
    const interviewee = interviewees[this.findIntervieweeId()];

    // if current bubble is the last one
    const isLastBubble = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];
        const thisBubbleI = thisHistoryItem.i;
        const lastBubbleI = storyline.length - 1;
        return thisBubbleI === lastBubbleI;
      }
      return false;
    };

    // if current action should be `nevermind`
    const isNvmBubble = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];
        return thisHistoryItem.type === "switchTo";
      }
      return false;
    };

    // should actionbar side toggles be hidden
    const hideActionbarSatellites = !isNvmBubble() && !isLastBubble();

    const renderUserActions = () => {
      if (history.length > 0) {
        const thisHistoryItem = history[history.length - 1];

        const thisBubbleI = thisHistoryItem.i;
        const lastBubbleI = storyline.length;

        const isActiveActionbarEmot = this.state.actionbar === "emot";
        const isActiveActionbarRunaway = this.state.actionbar === "runaway";
        const isLastBubbleSwitchTo = thisHistoryItem.type === "switchTo";
        const isTheVeryLastBubble = thisBubbleI === lastBubbleI - 1;

        if (isLastBubbleSwitchTo) {
          return <NvmActions updateHistory={this.updateHistory} />;
        } else if (isTheVeryLastBubble) {
          return (
            <RunAwayActions
              isSwitchPossible={interviewees.length > 1}
              navigateAway={this.props.router.push}
              updateHistory={this.updateHistory}
              story={this.props.story}
            />
          );
          // } else if (thisBubbleI < lastBubbleI - 1 && !this.state.hideActionbar) {
        }
        const nextBubble = storyline[thisBubbleI + 1];
        if (nextBubble.role === "user" && this.state.actionbar) {
          if (isActiveActionbarEmot) {
            return <EmoActions updateHistory={this.updateHistory} />;
          } else if (isActiveActionbarRunaway) {
            return (
              <RunAwayActions
                isSwitchPossible={interviewees.length > 1}
                navigateAway={this.props.router.push}
                updateHistory={this.updateHistory}
                story={this.props.story}
              />
            );
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
        } else if (nextBubble.role === "user" && this.state.actionbar) {
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
            onClick={() => this.props.router.push(`/${story.id}/listing`)}
          >
            <Icon name="arrow-left" />
          </Action>
          <Action onClick={() => this.toggleModal("intervieweeModal")}>
            <Tip title={interviewee.name}>
              <Avatar image={interviewee.avatar} size="l" />
            </Tip>
          </Action>
          <Action iconic onClick={() => this.toggleModal("storyDetailsModal")}>
            <Icon name="info" />
          </Action>
        </Topbar>
        <PageBody flex={[1, 1, `100%`]}>
          {this.state.currentIntervieweeId ? (
            <Storyline
              {...this.props}
              currentIntervieweeId={this.state.currentIntervieweeId}
              history={this.state.history}
              initHistory={this.initHistory}
              interviewee={interviewee}
              onBubbleRender={this.onBubbleRender}
              story={story}
              storyline={storyline}
              switchChat={this.switchChat}
              updateHistory={this.updateHistory}
            />
          ) : null}
        </PageBody>
        <PageFoot limit="m" flex={[0, 0, `80px`]} padded>
          <Actionbar satellite={hideActionbarSatellites ? "both" : null}>
            {hideActionbarSatellites ? (
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
            {hideActionbarSatellites ? (
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
          interviewee={interviewee}
          isOpen={this.state.intervieweeModal !== null}
          key="intervieweeModal"
        />
      ) : null,
      this.state.storyDetailsModal ? (
        <StoryDetailsModal
          handleClose={() => this.toggleModal("storyDetailsModal")}
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

export default withRouter(ChatView);
