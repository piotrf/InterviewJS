import {} from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Container,
  Checkbox,
  Separator,
  color,
  font,
  radius,
  setSpace,
  setType
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

  & label {
    align-content: center;
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    justify-content: center;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 150px;
    with: 100%;
    &:before {
      content: '';
      border-width: 1px 0 1px 1px;
      border-radius: ${radius.s} 0 0 ${radius.s};
      border-style: solid;
      border-color: ${color.greyHL};
      background: ${color.white};
      height: 48px;
      width: 30px;
      position: absolute;
      left: -31px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }
  };
  & label > span {
    left: -19px;
  }

`;

const Preview = css.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
  & > * {
    ${setSpace("mhx")};
    max-width: 40%;
  }
`;

export default class UserPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableExplore: false,
      enableIgnore: true,
      exploreVal: null,
      ignoreVal: null
    };
    this.updatePreview = this.updatePreview.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }
  toggleAction(action, e) {
    this.setState({ [action]: e.target.checked });
  }
  updatePreview() {
    console.log("updatePreview");
  }
  render() {
    const { enableExplore, enableIgnore, ignoreVal, exploreVal } = this.state;
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <PaneFrame
          {...this.props}
          preview={
            <Preview>
              {enableIgnore ? (
                <Action primary fixed>
                  {ignoreVal || "Ignore"}
                </Action>
              ) : null}
              {enableExplore ? (
                <Action primary fixed>
                  {exploreVal || "Explore"}
                </Action>
              ) : null}
            </Preview>
          }
          active
          side="right"
        >
          <UserActions dir="column">
            <Container flex={[1, 1, "50%"]}>
              <UserAction dir="row">
                <Container flex={[0, 1, "150px"]} align="center" dir="column">
                  <Checkbox
                    checked={this.state.enableIgnore}
                    onChange={(e) => this.toggleAction("enableIgnore", e)}
                  >
                    Ignore topic
                  </Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  Stuff
                </Container>
              </UserAction>
            </Container>
            <Separator silent size="s" />
            <Container flex={[1, 1, "50%"]}>
              <UserAction dir="row">
                <Container flex={[0, 1, "150px"]} align="center" dir="column">
                  <Checkbox
                    checked={this.state.enableExplore}
                    onChange={(e) => this.toggleAction("enableExplore", e)}
                  >
                    Explore topic
                  </Checkbox>
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
