import { shape, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class LinkPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} draft={null} side="left">
        LinkPane
      </PaneFrame>
    );
  }
}

LinkPane.propTypes = {
  draft: shape({
    value: string,
    title: string
  })
};

LinkPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
