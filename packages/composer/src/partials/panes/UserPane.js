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
      continueVal: "Continue",
      customContinueVal: "",
      customExploreVal: "",
      enableContinue: true,
      enableExplore: false,
      exploreDict: "text",
      exploreLibItem: null,
      exploreVal: "Explore"
    };
    this.addStorylineItem = this.addStorylineItem.bind(this);
    this.customiseActionLabel = this.customiseActionLabel.bind(this);
    this.selectContinueAction = this.selectContinueAction.bind(this);
    this.selectExploreAction = this.selectExploreAction.bind(this);
    this.selectSkipAction = this.selectSkipAction.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }
  toggleAction(action, e) {
    this.setState({ [action]: e.target.checked });
  }
  customiseActionLabel(action, e) {
    const { value } = e.target;
    return action === "customExploreVal"
      ? this.setState({
          [action]: value,
          enableExplore: value.length > 0,
          exploreLibItem: null,
          exploreVal: value.length > 0 ? value : this.props.exploreVal
        })
      : this.setState({
          [action]: value,
          continueLibItem: null,
          continueVal: value.length > 0 ? value : this.props.continueVal
        });
  }
  selectSkipAction(i, e) {
    this.setState({
      customExploreVal: e.target.innerHTML,
      enableExplore: true,
      exploreLibItem: i,
      exploreVal: e.target.innerHTML
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
  selectExploreAction(dict, i, e) {
    this.setState({
      customExploreVal: e.target.innerHTML,
      enableExplore: true,
      exploreLibDict: dict,
      exploreLibItem: i,
      exploreVal: e.target.innerHTML
    });
  }
  addStorylineItem() {
    const { storyIndex, currentInterviewee } = this.props;
    const {
      enableContinue,
      enableExplore,
      continueVal,
      exploreVal
    } = this.state;
    const newUserBubble = {
      content: [
        { enabled: enableExplore, value: exploreVal, type: "ignore" },
        { enabled: enableContinue, value: continueVal, type: "explore" }
      ],
      role: "user"
    };
    this.props.addStorylineItem(storyIndex, currentInterviewee, newUserBubble);
    this.setState({
      customContinueVal: "",
      customExploreVal: "",
      enableExplore: false,
      continueLibItem: null,
      continueVal: this.props.continueVal,
      exploreLibItem: null,
      exploreVal: this.props.exploreVal
    });
  }
  render() {
    const {
      continueDict,
      continueLibDict,
      continueVal,
      enableContinue,
      enableExplore,
      exploreDict,
      exploreVal
    } = this.state;
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <PaneFrame
          {...this.props}
          active
          addStorylineItem={this.addStorylineItem}
          hasDraft={enableContinue || enableExplore}
          side="right"
          draft={
            <Draft>
              <Action
                fixed
                primary={!enableExplore}
                secondary={!!enableExplore}
              >
                {continueVal}
              </Action>
              {enableExplore ? (
                <Action fixed primary>
                  {exploreVal}
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
                      title="Here’s where you add a user interaction that will lead into the interview text in the preview panel.  You can see and import our suggestions via the tabs or better still, write your own. It has to be the user’s voice!"
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
                      {USER_ACTIONS.continue[continueDict].map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            interactive
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
              <UserAction dir="row" active={enableExplore}>
                <Container flex={[0, 0, "140px"]} align="center" dir="column">
                  <Checkbox
                    checked={enableExplore}
                    onChange={(e) => this.toggleAction("enableExplore", e)}
                  >
                    <PageSubtitle typo="p4">
                      Explore
                      <Tip
                        position="bottom"
                        title="Here’s where you create a second interaction. In combination with the question or user interaction above it creates a choice for the user."
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
                      value={this.state.customExploreVal}
                      onChange={(e) =>
                        this.customiseActionLabel("customExploreVal", e)
                      }
                    />
                  </CustomActionHolder>
                  <Container flex={[1, 0, "auto"]} style={{ width: "100%" }}>
                    <PaneTabs>
                      <PaneTab
                        active={exploreDict === "text"}
                        onClick={() => this.setState({ exploreDict: "text" })}
                      >
                        <Icon name="text" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={exploreDict === "link"}
                        onClick={() => this.setState({ exploreDict: "link" })}
                      >
                        <Icon name="link" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={exploreDict === "image"}
                        onClick={() => this.setState({ exploreDict: "image" })}
                      >
                        <Icon name="image" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={exploreDict === "embed"}
                        onClick={() => this.setState({ exploreDict: "embed" })}
                      >
                        <Icon name="embed" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={exploreDict === "map"}
                        onClick={() => this.setState({ exploreDict: "map" })}
                      >
                        <Icon name="map" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={exploreDict === "media"}
                        onClick={() => this.setState({ exploreDict: "media" })}
                      >
                        <Icon name="media" size="x" />
                      </PaneTab>
                    </PaneTabs>
                  </Container>
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.explore[exploreDict].map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            active={i === this.state.exploreLibItem}
                            interactive
                            onClick={(e) =>
                              this.selectExploreAction(exploreDict, i, e)
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
  exploreVal: string,
  storyIndex: number.isRequired /* eslint react/forbid-prop-types: 0 */
};

UserPane.defaultProps = {
  exploreVal: "Explore",
  continueVal: "Continue"
};
