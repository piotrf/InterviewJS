import { func } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";
import { color, setType } from "../../../utils";

const MessageEl = css.p`
  ${setType("x")};
  color: ${color.greyLLt};
  font-style: italic;
  text-align: center;
`;

export default class Message extends Component {
  componentDidMount() {
    return this.props.callback ? this.props.callback() : null;
  }
  render() {
    return <MessageEl {...this.props} />;
  }
}

Message.propTypes = {
  callback: func
};

Message.defaultProps = {
  callback: null
};
