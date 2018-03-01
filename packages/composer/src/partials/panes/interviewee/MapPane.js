import { array, node, oneOfType, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class MapPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} preview={this.state.preview}>
        MapPane
      </PaneFrame>
    );
  }
}

MapPane.propTypes = {
  preview: oneOfType([array, string, node])
};

MapPane.defaultProps = {
  preview: ""
};
