import { func, number, object } from "prop-types";
import css from "styled-components";
import React from "react";

import { Container } from "interviewjs-styleguide";

import PaneFrame from "./PaneFrame";

const PaneEl = css(Container)`
  align-items: stretch;
  height: 100%;
  overflow: hidden;
`;

export default class UserPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updatePreview = this.updatePreview.bind(this);
  }
  updatePreview(preview) {
    this.setState({ preview });
  }
  render() {
    // const { currentInterviewee, story } = this.props;
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <Container flex={[1, 1, "100%"]}>
          <PaneFrame {...this.props} preview={this.state.preview} active>
            User pane goes here
          </PaneFrame>
        </Container>
      </PaneEl>
    );
  }
}

UserPane.propTypes = {
  // currentInterviewee: number.isRequired,
  // story: object.isRequired /* eslint react/forbid-prop-types: 0 */,
  // storyIndex: number.isRequired,
  // updateInterviewee: func.isRequired
};

UserPane.defaultProps = {};
