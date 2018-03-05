import {} from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Container,
  Checkbox,
  Separator,
  TextInput,
  color,
  font,
  radius,
  setSpace,
  setType,
  time
} from "interviewjs-styleguide";

import PaneFrame from "./PaneFrame";

import { USER_ACTIONS } from "../../options";

const PaneEl = css(Container)`
  height: 100%;
`;

const UserActions = css(Container)`
  ${setSpace("pbm")};
  height: 100%;
  position: relative;
  & > div {
    display: block;
    width: 100%;
    height: 50%;
  }
`;

const UserAction = css(Container)`
  align-items: stretch;
  border-radius: ${radius.l};
  border: 1px solid ${color.greyHL};
  box-shadow: 0 1px 3px ${color.shadowWt};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

const ActionLibHolder = css(Container)`
  ${setSpace("pvx")};
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
const ActionLibList = css.ul`
  display: block;
  text-align: center;
`;
const ActionLibItem = css.li`
  ${setSpace("phs")};
  ${setSpace("mvx")};
`;
const ActionLibAction = css.button`
  ${setSpace("phs")};
  ${setSpace("pvx")};
  ${setType("x")};
  background: none;
  border-radius: ${radius.h};
  border: 1px solid transparent;
  box-shadow: none;
  color: ${color.greyBlk};
  display: inline-block;
  font-family: ${font.serif};
  transition: color ${time.m}, border ${time.m}, text-decoration ${time.m};
  &:focus {
    outline: none;
  }
  ${({ active, interactive }) =>
    interactive && active
      ? `
    border-color: ${color.blueBlk};
    color: ${color.blueBlk};
  `
      : ``}
  ${({ interactive }) =>
    interactive
      ? `
    cursor: pointer;
    &:hover {
      color: ${color.blueBlk};
    }
  `
      : ``}
`;

const CustomActionHolder = css(Container)`
  ${setSpace("phs")};
  width: 100%;
  input {
    ${setSpace("pvn")};
    ${setSpace("phx")};
    height: 34px;
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
      enableIgnore: false,
      exploreLibItem: null,
      exploreVal: "",
      ignoreLibItem: null,
      ignoreVal: ""
    };
    this.updatePreview = this.updatePreview.bind(this);
    this.selectIgnoreAction = this.selectIgnoreAction.bind(this);
    this.selectExploreAction = this.selectExploreAction.bind(this);
    this.customiseActionLabel = this.customiseActionLabel.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }
  toggleAction(action, e) {
    this.setState({ [action]: e.target.checked });
  }
  customiseActionLabel(action, e) {
    return action === "ignoreVal"
      ? this.setState({ [action]: e.target.value, ignoreLibItem: null })
      : this.setState({ [action]: e.target.value, exploreLibItem: null });
  }
  selectIgnoreAction(i, e) {
    this.setState({ ignoreVal: e.target.innerHTML, ignoreLibItem: i });
  }
  selectExploreAction(i, e) {
    this.setState({ exploreVal: e.target.innerHTML, exploreLibItem: i });
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
          active
          addStorylineItem={() => console.log("addStorylineItem")}
          hasPreview={enableExplore || enableIgnore}
          side="right"
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
        >
          <UserActions>
            <Container>
              <UserAction dir="row">
                <Container flex={[0, 1, "150px"]} align="center" dir="column">
                  <Checkbox
                    checked={enableIgnore}
                    onChange={(e) => this.toggleAction("enableIgnore", e)}
                  >
                    Ignore topic
                  </Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.ignore.map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            active={
                              enableIgnore
                                ? i === this.state.ignoreLibItem
                                : false
                            }
                            interactive={enableIgnore}
                            onClick={(e) =>
                              enableIgnore
                                ? this.selectIgnoreAction(i, e)
                                : null
                            }
                          >
                            {action}
                          </ActionLibAction>
                        </ActionLibItem>
                      ))}
                    </ActionLibList>
                  </ActionLibHolder>
                  <Separator size="n" />
                  <CustomActionHolder flex={[0, 0, "50px"]} dir="column">
                    <TextInput
                      type="text"
                      placeholder="Type your own text label…"
                      maxLength={34}
                      disabled={!enableIgnore}
                      value={this.state.ignoreVal}
                      onChange={(e) =>
                        this.customiseActionLabel("ignoreVal", e)
                      }
                    />
                  </CustomActionHolder>
                </Container>
              </UserAction>
            </Container>
            <Separator silent size="s" />
            <Container>
              <UserAction dir="row">
                <Container flex={[0, 1, "150px"]} align="center" dir="column">
                  <Checkbox
                    checked={enableExplore}
                    onChange={(e) => this.toggleAction("enableExplore", e)}
                  >
                    Explore topic
                  </Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.explore.map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            interactive={enableExplore}
                            active={
                              enableExplore
                                ? i === this.state.exploreLibItem
                                : false
                            }
                            onClick={(e) =>
                              enableExplore
                                ? this.selectExploreAction(i, e)
                                : null
                            }
                          >
                            {action}
                          </ActionLibAction>
                        </ActionLibItem>
                      ))}
                    </ActionLibList>
                  </ActionLibHolder>
                  <Separator size="n" />
                  <CustomActionHolder flex={[0, 0, "50px"]} dir="column">
                    <TextInput
                      type="text"
                      placeholder="Type your own text label…"
                      maxLength={34}
                      disabled={!enableExplore}
                      value={this.state.exploreVal}
                      onChange={(e) =>
                        this.customiseActionLabel("exploreVal", e)
                      }
                    />
                  </CustomActionHolder>
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
