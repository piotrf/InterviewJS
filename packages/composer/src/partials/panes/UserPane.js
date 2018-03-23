import { func, number, string } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Checkbox,
  Container,
  Form,
  FormItem,
  Icon,
  Legend,
  PageSubtitle,
  PaneTab,
  PaneTabs,
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
  & > div:first-child {
    border-radius: 0 ${radius.l} ${radius.l} 0;
  }
  & label {
    font-weight: bold;
    padding: 0;
    &:before {
      ${setSpace("mts")};
      background: ${color.white};
      border-color: ${color.greyHL};
      border-radius: ${radius.s} 0 0 ${radius.s};
      border-style: solid;
      border-width: 1px 0 1px 1px;
      content: ' ';
      height: 48px;
      right: 100%;
      position: absolute;
      top: 0;
      width: 30px;
      z-index: 2;
    }
  };
  & label > span {
    margin-left: -20px;
    margin-top: 2px;
    position: absolute;
    z-index: 5;
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
  ${PaneTabs} {
    transform: translateY(-1px);
    border-radius: 0 ${radius.l} 0 0;
    & button {
      ${setSpace("phn")};
      ${setSpace("pvx")};
    }
    & > li:last-child {
      border-radius: 0 ${radius.l} 0 0;
      button {
        border-radius: 0 ${radius.l} 0 0;
      }
    }
  }
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

const Whatever = css.div`
  ${setSpace("mhm")};
  ${setSpace("mbm")};
`;
const SkipTitle = css(PageSubtitle)`
  color: ${({ active }) => (active ? color.blueBlk : color.greyBlk)};
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
      customSkipVal: "",
      enableContinue: true,
      enableSkip: false,
      skipLibItem: null,
      skipVal: "Ignore"
    };
    this.addStorylineItem = this.addStorylineItem.bind(this);
    this.customiseActionLabel = this.customiseActionLabel.bind(this);
    this.selectExploreAction = this.selectExploreAction.bind(this);
    this.selectIgnoreAction = this.selectIgnoreAction.bind(this);
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
  selectIgnoreAction(i, e) {
    this.setState({
      customSkipVal: "",
      enableSkip: true,
      skipLibItem: i,
      skipVal: e.target.innerHTML
    });
  }
  selectExploreAction(dict, i, e) {
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
      continueLibItem: null,
      continueVal: this.props.continueVal,
      customContinueVal: "",
      customSkipVal: "",
      enableSkip: false,
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
              <UserAction dir="column">
                <Container flex={[1, 1, "auto"]} padded>
                  <Container align="center">
                    <PageSubtitle typo="p1">Continue Action</PageSubtitle>
                  </Container>
                  <Separator silent size="s" />
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <FormItem>
                      {/* <Label>Custom action text</Label> */}
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
                      <Legend tip="`Continue` action will let the reader move on to the next interviewee bubble.">
                        i
                      </Legend>
                    </FormItem>
                  </Form>
                </Container>
                <Container flex={[0, 1, "100%"]} dir="column" fill="grey">
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <PaneTabs>
                      <PaneTab
                        active={continueDict === "text"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "text" })
                            : null
                        }
                      >
                        <Icon name="text" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "link"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "link" })
                            : null
                        }
                      >
                        <Icon name="link" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "image"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "image" })
                            : null
                        }
                      >
                        <Icon name="image" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "embed"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "embed" })
                            : null
                        }
                      >
                        <Icon name="embed" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "map"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "map" })
                            : null
                        }
                      >
                        <Icon name="map" size="x" />
                      </PaneTab>
                      <PaneTab
                        active={continueDict === "media"}
                        disabled={!enableContinue}
                        onClick={
                          enableContinue
                            ? () => this.setState({ continueDict: "media" })
                            : null
                        }
                      >
                        <Icon name="media" size="x" />
                      </PaneTab>
                    </PaneTabs>
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
                                ? this.selectExploreAction(continueDict, i, e)
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
              <UserAction dir="column">
                <Checkbox
                  checked={enableSkip}
                  onChange={(e) => this.toggleAction("enableSkip", e)}
                >
                  <Container align="center" padded>
                    <SkipTitle typo="p1" active={this.state.enableSkip}>
                      Skip Action
                    </SkipTitle>
                  </Container>
                </Checkbox>
                <Whatever flex={[1, 1, "auto"]}>
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <FormItem>
                      <TextInput
                        type="text"
                        placeholder="Type your own text label…"
                        maxLength={34}
                        value={this.state.customSkipVal}
                        onChange={(e) =>
                          this.customiseActionLabel("customSkipVal", e)
                        }
                      />
                      <Legend tip="`Skip` action will allow the reader to skip the next closest bubble.">
                        i
                      </Legend>
                    </FormItem>
                  </Form>
                </Whatever>
                <Separator size="n" />
                <Container flex={[0, 1, "100%"]} dir="column" fill="grey">
                  <ActionLibHolder flex={[1, 1, "auto"]}>
                    <ActionLibList>
                      {USER_ACTIONS.ignore.map((action, i) => (
                        <ActionLibItem key={i}>
                          <ActionLibAction
                            active={
                              enableSkip ? i === this.state.skipLibItem : false
                            }
                            interactive
                            onClick={(e) => this.selectIgnoreAction(i, e)}
                          >
                            {action}
                          </ActionLibAction>
                        </ActionLibItem>
                      ))}
                    </ActionLibList>
                  </ActionLibHolder>
                  <Separator size="n" />
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
  skipVal: "Ignore",
  continueVal: "Explore"
};
