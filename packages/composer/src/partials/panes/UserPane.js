import {} from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Container,
  Checkbox,
  Separator,
  color,
  radius
} from "interviewjs-styleguide";

import PaneFrame from "./PaneFrame";

const PaneEl = css(Container)`
  height: 100%;
`;

const UserActions = css(Container)`
  height: 100%;
  align-items: stretch;
`;

const UserAction = css(Container)`
  align-items: stretch;
  border-radius: ${radius.l};
  border: 1px solid ${color.greyHL};
  box-shadow: 0 1px 3px ${color.shadowWt};
  height: 100%;
  width: 100%;
  & > div {
    border-radius: 0 ${radius.l} ${radius.l} 0;
  }
  & > div:last-child {
    border-left: 1px solid ${color.greyHL};
  }
`;

export default class UserPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { explore: null, ignore: null };
    this.updatePreview = this.updatePreview.bind(this);
  }
  updatePreview() {
    console.log("updatePreview");
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
              <UserAction dir="row">
                <Container flex={[0, 1, "140px"]} align="center" dir="column">
                  <Checkbox>Ignore</Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  Stuff
                </Container>
              </UserAction>
            </Container>
            <Separator silent size="s" />
            <Container flex={[1, 1, "50%"]}>
              <UserAction dir="row">
                <Container flex={[0, 1, "140px"]} align="center" dir="column">
                  <Checkbox>Explore</Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  Stuff
                </Container>
              </UserAction>
            </Container>
          </UserActions>
        </PaneFrame>
      </PaneEl>
    );
  }
}

UserPane.propTypes = {};

UserPane.defaultProps = {};
