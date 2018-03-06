import { array, node, oneOfType, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class ImagePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} preview={this.state.preview} side="left">
        ImagePane
      </PaneFrame>
    );
  }
}

ImagePane.propTypes = {
  preview: oneOfType([array, string, node])
};

ImagePane.defaultProps = {
  preview: ""
};
