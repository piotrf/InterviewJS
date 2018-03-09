import { shape, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class MapPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} draft={null} side="left">
        MapPane
      </PaneFrame>
    );
  }
}

MapPane.propTypes = {
  draft: shape({ value: string, title: string })
};

MapPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
