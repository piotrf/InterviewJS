import {} from "prop-types";
import css from "styled-components";
import React from "react";

import { Container, Separator, color, radius } from "interviewjs-styleguide";

import PaneFrame from "./PaneFrame";

const PaneEl = css(Container)`
  height: 100%;
`;

const UserActions = css(Container)`
  height: 100%;
  align-items: stretch;
`;

const UserAction = css(Container)`
  border-radius: ${radius.m};
  border: 1px solid ${color.greyHL};
  box-shadow: 0 1px 3px ${color.shadowWt};
  height: 100%;
  width: 100%;
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
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <PaneFrame
          {...this.props}
          active
          preview={this.state.preview}
          side="right"
        >
          <UserActions dir="column">
            <Container flex={[1, 1, "50%"]}>
              <UserAction>Ignore</UserAction>
            </Container>
            <Separator silent size="s" />
            <Container flex={[1, 1, "50%"]}>
              <UserAction>Explore</UserAction>
            </Container>
          </UserActions>
        </PaneFrame>
      </PaneEl>
    );
  }
}

UserPane.propTypes = {};

UserPane.defaultProps = {};
