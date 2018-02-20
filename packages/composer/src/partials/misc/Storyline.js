import React, { Component } from "react";
import { scrolled } from "react-stay-scrolled";
import {} from "prop-types";

import {} from "interviewjs-styleguide";
import { Message } from "../";

class Storyline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { storyline } = this.props;
    return storyline.map((msg, i) => <Message msg={msg} key={msg.id} />);
  }
}

Storyline.propTypes = {};

Storyline.defaultProps = {};

export default scrolled(Storyline);
