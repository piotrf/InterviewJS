import { shape, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class MediaPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} draft={null} side="left">
        MediaPane
      </PaneFrame>
    );
  }
}

MediaPane.propTypes = {
  draft: shape({ value: string, title: string })
};

MediaPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
