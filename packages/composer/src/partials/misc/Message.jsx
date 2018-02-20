import React, { Component } from "react";
import { scrolled } from "react-stay-scrolled";
import {} from "prop-types";

import { Bubble, BubbleGroup } from "interviewjs-styleguide";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { stayScrolled } = this.props;
    stayScrolled();
  }
  render() {
    return (
      <BubbleGroup key={this.props.msg.id}>
        <Bubble persona={this.props.msg.role}>{this.props.msg.content}</Bubble>
      </BubbleGroup>
    );
  }
}

Message.propTypes = {};

Message.defaultProps = {};

export default scrolled(Message);
