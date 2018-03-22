import React from "react";
import { bool, func } from "prop-types";
import { Action } from "interviewjs-styleguide";

const RunAwayActions = (props) => [
  props.isSwitchPossible ? (
    <Action
      fixed
      key="talkToSomebodyElse"
      onClick={() => props.updateHistory("switchTo")}
      primary
    >
      I want to talk to somebody else
    </Action>
  ) : null,
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
  isSwitchPossible: bool.isRequired,
  updateHistory: func.isRequired,
  navigateAway: func.isRequired
};

export default RunAwayActions;
