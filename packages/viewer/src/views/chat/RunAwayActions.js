/* eslint react/forbid-prop-types: 0 */
import React from "react";
import { bool, func, object } from "prop-types";
import { Action } from "interviewjs-styleguide";

const RunAwayActions = (props) => [
  props.isSwitchPossible ? (
    <Action
      fixed
      key="talkToSomebodyElse"
      onClick={() => props.updateHistory("switchTo")}
      primary
      theme={{font: "PT sans"}}
    >
      I want to talk to somebody else
    </Action>
  ) : null,
  <Action
    fixed
    key="doneChatting"
    onClick={() => props.navigateAway(`/${props.story.id}/outro`)}
    primary
    tone="negative"
    theme={{font: "PT sans"}}
  >
    I’m done chatting
  </Action>
];

RunAwayActions.propTypes = {
  isSwitchPossible: bool.isRequired,
  updateHistory: func.isRequired,
  navigateAway: func.isRequired,
  story: object
};

export default RunAwayActions;
