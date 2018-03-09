import { shape, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class EmbedPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} draft={null} side="left">
        EmbedPane
      </PaneFrame>
    );
  }
}

EmbedPane.propTypes = {
  draft: shape({ value: string, title: string })
};

EmbedPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
