import { array, node, oneOfType, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class LinkPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} preview={this.state.preview}>
        LinkPane
      </PaneFrame>
    );
  }
}

LinkPane.propTypes = {
  preview: oneOfType([array, string, node])
};

LinkPane.defaultProps = {
  preview: ""
};
