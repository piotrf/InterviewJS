import React from "react";
import { func } from "prop-types";
import { Action, Icon } from "interviewjs-styleguide";

const EmoActions = props => [
  <Action iconic onClick={() => props.updateHistory("emoji", "smile")} key="smile">
    <Icon name="smile" size="l" />
  </Action>,
  <Action iconic onClick={() => props.updateHistory("emoji", "sad")} key="sad">
    <Icon name="sad" size="l" />
  </Action>,
  <Action iconic onClick={() => props.updateHistory("emoji", "angry")} key="angry">
    <Icon name="angry" size="l" />
  </Action>,
  <Action iconic onClick={() => props.updateHistory("emoji", "shocked")} key="shocked">
    <Icon name="shocked" size="l" />
  </Action>,
  <Action iconic onClick={() => props.updateHistory("emoji", "neutral")} key="neutral">
    <Icon name="neutral" size="l" />
  </Action>,
  <Action iconic onClick={() => props.updateHistory("emoji", "wondering")} key="wondering">
    <Icon name="wondering" size="l" />
  </Action>,
];

EmoActions.propTypes = {
  updateHistory: func.isRequired,
};

export default EmoActions;
