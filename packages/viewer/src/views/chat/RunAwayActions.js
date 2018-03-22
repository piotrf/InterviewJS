import React from "react";
import { func } from "prop-types";
import { Action } from "interviewjs-styleguide";

const RunAwayActions = (props) => [
  <Action
    fixed
    key="talkToSomebodyElse"
    onClick={() =>
      props.updateHistory("diss", "I want to talk to somebody else")
    }
    primary
  >
    I want to talk to somebody else
  </Action>,
  <Action
    fixed
    key="doneChatting"
    onClick={() => props.navigateAway("/story/outro")}
    primary
    tone="negative"
  >
    I’m done chatting
  </Action>
];

RunAwayActions.propTypes = {
  updateHistory: func.isRequired,
  navigateAway: func.isRequired
};

export default RunAwayActions;
