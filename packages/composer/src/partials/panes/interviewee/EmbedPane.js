import { array, node, oneOfType, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class EmbedPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} preview={this.state.preview}>
        EmbedPane
      </PaneFrame>
    );
  }
}

EmbedPane.propTypes = {
  preview: oneOfType([array, string, node])
};

EmbedPane.defaultProps = {
  preview: ""
};
