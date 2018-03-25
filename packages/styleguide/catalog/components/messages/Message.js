import { array, number, object, oneOfType, string } from "prop-types";
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
  constructor(props) {
    super(props);
    this.state = { rendering: true };
  }
  componentDidMount() {
    this.renderTimeout = setTimeout(() => {
      this.setState({ rendering: false });
    }, this.props.delay);
  }
  componentWillUnmount() {
    clearTimeout(this.renderTimeout);
  }
  render() {
    const { rendering } = this.state;
    const { children } = this.props;
    if (!rendering) {
      return <MessageEl {...this.props}>{children}</MessageEl>;
    }
    return null;
  }
}

Message.propTypes = {
  children: oneOfType([array, object, string]),
  delay: number,
  persona: string
};

Message.defaultProps = {
  children: null,
  delay: 0,
  persona: null
};
