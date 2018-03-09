import { shape, string } from "prop-types";
import React, { Component } from "react";

import PaneFrame from "../PaneFrame";

export default class ImagePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
  }
  render() {
    return (
      <PaneFrame {...this.props} draft={null} side="left">
        ImagePane
      </PaneFrame>
    );
  }
}

ImagePane.propTypes = {
  draft: shape({
    value: string,
    title: string
  })
};

ImagePane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
