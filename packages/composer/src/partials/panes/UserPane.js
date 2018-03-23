import { func, number, string } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Checkbox,
  Container,
  Icon,
  PageSubtitle,
  PaneTab,
  PaneTabs,
  Separator,
  TextInput,
  Tip,
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
    width: 140px;
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
  ${PaneTabs} {
    width: 100%;
    position: relative;
    & li {
      display: inline-block;
    }
    & button {
      ${setSpace("phn")};
      ${setSpace("pvx")};
    }
  }
  ${PageSubtitle} {
    color: ${({ active }) => (active ? color.blueBlk : color.greyBlk)};
  }
`;

const ActionLibHolder = css(Container)`
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

const Draft = css.div`
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
      continueDict: "text",
      continueLibDict: "text",
      continueLibItem: null,
      continueVal: "Explore",
      customContinueVal: "",
      customSkipVal: "",
      enableContinue: true,
      enableSkip: false,
      skipLibItem: null,
      skipVal: "Ignore"
    };
    this.addStorylineItem = this.addStorylineItem.bind(this);
    this.customiseActionLabel = this.customiseActionLabel.bind(this);
    this.selectContinueAction = this.selectContinueAction.bind(this);
    this.selectSkipAction = this.selectSkipAction.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }
  toggleAction(action, e) {
    this.setState({ [action]: e.target.checked });
  }
  customiseActionLabel(action, e) {
    const { value } = e.target;
    return action === "customSkipVal"
      ? this.setState({
          [action]: value,
          enableSkip: value.length > 0,
          skipLibItem: null,
          skipVal: value.length > 0 ? value : this.props.skipVal
        })
      : this.setState({
          [action]: value,
          continueLibItem: null,
          continueVal: value.length > 0 ? value : this.props.continueVal
        });
  }
  selectSkipAction(i, e) {
    this.setState({
      customSkipVal: e.target.innerHTML,
      enableSkip: true,
      skipLibItem: i,
      skipVal: e.target.innerHTML
    });
  }
  selectContinueAction(dict, i, e) {
    this.setState({
      customContinueVal: e.target.innerHTML,
      continueLibDict: dict,
      continueLibItem: i,
      continueVal: e.target.innerHTML
    });
  }
  addStorylineItem() {
    const { storyIndex, currentInterviewee } = this.props;
    const { enableContinue, enableSkip, continueVal, skipVal } = this.state;
    const newUserBubble = {
      content: [
        { enabled: enableSkip, value: skipVal, type: "ignore" },
        { enabled: enableContinue, value: continueVal, type: "explore" }
      ],
      role: "user"
    };
    this.props.addStorylineItem(storyIndex, currentInterviewee, newUserBubble);
    this.setState({
      enableSkip: false,
      continueLibItem: null,
      continueVal: this.props.continueVal,
      skipLibItem: null,
      skipVal: this.props.skipVal
    });
  }
  render() {
    const {
      enableContinue,
      enableSkip,
      continueDict,
      continueLibDict,
      continueVal,
      skipVal
    } = this.state;
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <PaneFrame
          {...this.props}
          active
          addStorylineItem={this.addStorylineItem}
          hasDraft={enableContinue || enableSkip}
          side="right"
          draft={
            <Draft>
              {enableSkip ? (
                <Action tone="negative" fixed>
                  {skipVal}
                </Action>
              ) : null}
              {enableSkip && enableContinue ? <Separator dir="v" /> : null}
              {enableContinue ? (
                <Action tone="positive" fixed>
                  {continueVal}
                </Action>
              ) : null}
            </Draft>
          }
        >
          <UserActions>
            <Container>
              <UserAction dir="row" active>
                <Container flex={[0, 0, "140px"]} align="center" dir="column">
                  <PageSubtitle typo="p4">
                    Continue
                    <Tip
                      position="bottom"
                      title="`Explore` actions allow the reader to move on to the next interviewee bubble, simply continue in the story."
                    >
                      <Icon
                        name="info2"
                        style={{
                          color: color.greyBlk,
                          marginLeft: "5px",
                          position: "relative",
                          top: "2px"
                        }}
                      />
                    </Tip>
                  </PageSubtitle>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  <CustomActionHolder flex={[0, 0, "50px"]} dir="column">
                    <TextInput
                      type="text"
                      placeholder="Type your own text label…"
                      maxLength={34}
                      disabled={!enableContinue}
                      value={this.state.customContinueVal}
                      onChange={(e) =>
                        this.customiseActionLabel("customContinueVal", e)
                      }
                    />
                  </CustomActionHolder>
                  <Container flex={[1, 0, "auto"]} style={{ width: "100%" }}>
                    <PaneTabs>
                      <PaneTab
                        active={continueDict === "text"}
                        onClick={() => this.setState({ continueDict: "text" })}
                      >
                        <Icon name="text" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "link"}
                        onClick={() => this.setState({ continueDict: "link" })}
                      >
                        <Icon name="link" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "image"}
                        onClick={() => this.setState({ continueDict: "image" })}
                      >
                        <Icon name="image" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "embed"}
                        onClick={() => this.setState({ continueDict: "embed" })}
                      >
                        <Icon name="embed" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "map"}
                        onClick={() => this.setState({ continueDict: "map" })}
                      >
                        <Icon name="map" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "media"}
                        onClick={() => this.setState({ continueDict: "media" })}
                      >
                        <Icon name="media" size="x" />
                      </PaneTab>
                    </PaneTabs>
                  </Container>
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.explore[continueDict].map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            interactive={enableContinue}
                            active={
                              enableContinue && continueDict === continueLibDict
                                ? i === this.state.continueLibItem
                                : false
                            }
                            onClick={(e) =>
                              enableContinue
                                ? this.selectContinueAction(continueDict, i, e)
                                : null
                            }
                          >
                            {action}
                          </ActionLibAction>
                        </ActionLibItem>
                      ))}
                    </ActionLibList>
                  </ActionLibHolder>
                </Container>
              </UserAction>
            </Container>
            <Separator silent size="s" />
            <Container>
              <UserAction dir="row" active={enableSkip}>
                <Container flex={[0, 0, "140px"]} align="center" dir="column">
                  <Checkbox
                    checked={enableSkip}
                    onChange={(e) => this.toggleAction("enableSkip", e)}
                  >
                    <PageSubtitle typo="p4">
                      Skip
                      <Tip
                        position="bottom"
                        title="`Ignore` actions allow the reader to skip the closest next group of interviewee bubbles. Use when nesting chats."
                      >
                        <Icon
                          name="info2"
                          style={{
                            color: color.greyBlk,
                            marginLeft: "5px",
                            position: "relative",
                            top: "2px"
                          }}
                        />
                      </Tip>
                    </PageSubtitle>
                  </Checkbox>
                </Container>
                <Container flex={[2, 2, "auto"]} fill="grey" dir="column">
                  <CustomActionHolder flex={[0, 0, "50px"]} dir="column">
                    <TextInput
                      type="text"
                      placeholder="Type your own text label…"
                      maxLength={34}
                      value={this.state.customSkipVal}
                      onChange={(e) =>
                        this.customiseActionLabel("customSkipVal", e)
                      }
                    />
                  </CustomActionHolder>
                  <Separator size="n" />
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.ignore.map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            active={i === this.state.skipLibItem}
                            interactive
                            onClick={(e) => this.selectSkipAction(i, e)}
                          >
                            {action}
                          </ActionLibAction>
                        </ActionLibItem>
                      ))}
                    </ActionLibList>
                  </ActionLibHolder>
                </Container>
              </UserAction>
            </Container>
          </UserActions>
        </PaneFrame>
      </PaneEl>
    );
  }
}

UserPane.propTypes = {
  addStorylineItem: func.isRequired,
  currentInterviewee: number.isRequired,
  continueVal: string,
  skipVal: string,
  storyIndex: number.isRequired /* eslint react/forbid-prop-types: 0 */
};

UserPane.defaultProps = {
  skipVal: "Skip",
  continueVal: "Continue"
};
