import { array, func, shape, number } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Avatar,
  Bubble,
  BubbleGroup,
  Bubbles,
  Container,
  Icon,
  Separator,
  Tip,
  color,
  radius,
  setSize,
  setSpace,
  skin,
  time
} from "interviewjs-styleguide";

const PaneEl = css(Container)`
  height: 100%;
`;
const PaneHead = css.div`
  bottom: 100%;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  transform: translateY(50%);
  z-index: 5;
`;
const PaneBody = css.div`
  height: 100%;
  width: 100%;
  & > * {
    height: 100%;
    overflow-y: auto;
  }
`;
const Storyline = css.div`
  ${setSpace("phl")};
  ${setSpace("ptl")};
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  overflow-y: auto;
  & > *:last-child {
    ${setSpace("pbl")};
  }
`;

const IntervieweesWrapper = css.div`
  display: inline-block;
  position: relative;
`;
const IntervieweesAction = css.span`
  ${setSize("s")};
  ${setSpace("mlx")};
  display: inline-block;
  left: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  & button {
    ${setSize("s")};
  }
`;
const Interviewees = css.ol`
  display: block;
  text-align: center;
`;
const Interviewee = css.li`
  border-color: transparent;
  border-radius: ${radius.a};
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  line-height: 0;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
  transition: border ${time.m};
  & button {
    border-width: 2px;
    min-height: auto;
    padding: 0;
  }
  & button:active {
    transform: none !important;
  }
  ${({ active, intervieweeColor }) =>
    active
      ? `
  border-color: ${intervieweeColor || skin.speakerColor};
  `
      : ``}
`;

const BubbleActions = css.div`
  ${({ binary }) =>
    binary
      ? `
    display: flex;
    jusitfy-content: flex-end;
  `
      : `
    & > * {
      max-width: none;
      width: auto;
    }
    & > *:first-child {
      border-rigth: 1px solid ${color.greyHL};
    }
  `};
  & > * {
      max-width: none;
      width: auto;
  }
  & > *:first-child {
    ${setSpace("mrx")};
    margin-left: 0;
  }
  & > *:last-child {
    ${setSpace("mlx")};
    margin-right: 0;
  }
`;

export default class StoryPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    setTimeout(this.scrollToBottom, 300);
  }
  componentDidUpdate() {
    setTimeout(this.scrollToBottom, 150);
  }
  scrollToBottom() {
    this.anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end"
    });
  }
  render() {
    const { interviewees } = this.props.story;
    const { currentInterviewee } = this.props;
    const { storyline } = interviewees[currentInterviewee];
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <PaneHead>
          <IntervieweesWrapper>
            <Interviewees>
              {interviewees.map((interviewee, intervieweeIndex) => (
                <Interviewee
                  active={this.props.currentInterviewee === intervieweeIndex}
                  intervieweeColor={interviewee.color}
                  key={interviewee.name}
                >
                  <Tip position="bottom" title={interviewee.name}>
                    <Action
                      secondary
                      onClick={() =>
                        this.props.switchInterviewee(intervieweeIndex)
                      }
                    >
                      <Avatar image={interviewee.avatar} size="m" />
                    </Action>
                  </Tip>
                </Interviewee>
              ))}
            </Interviewees>
            <IntervieweesAction>
              <Tip position="bottom" title="Manage interviewees">
                <Action
                  iconic
                  onClick={this.props.toggleDetailsModal}
                  secondary
                >
                  <Icon name="pen" size="x" />
                </Action>
              </Tip>
            </IntervieweesAction>
          </IntervieweesWrapper>
        </PaneHead>
        <PaneBody>
          <Storyline>
            {Object.keys(storyline).map((storyItem, i) => {
              const { role, content } = storyline[storyItem];
              const getContent = () => {
                if (role === "user") {
                  return (
                    <Bubble persona={role} theme={{ backg: skin.speakerBackg }}>
                      {content[0].enabled ? (
                        <Action tone="negative">{content[0].value}</Action>
                      ) : null}
                      {content[0].enabled && content[1].enabled ? (
                        <Separator dir="v" size="m" />
                      ) : null}
                      {content[1].enabled ? (
                        <Action tone="positive">{content[1].value}</Action>
                      ) : null}
                    </Bubble>
                  );
                }
                return <Bubble persona={role}>{content}</Bubble>;
              };
              return (
                <BubbleGroup key={storyItem}>
                  <Bubbles persona={role}>{getContent()}</Bubbles>
                </BubbleGroup>
              );
            })}
            <div
              ref={(el) => {
                this.anchor = el;
              }}
            />
          </Storyline>
        </PaneBody>
      </PaneEl>
    );
  }
}

StoryPane.propTypes = {
  currentInterviewee: number.isRequired,
  story: shape({
    interviewees: array.isRequired
  }).isRequired,
  switchInterviewee: func.isRequired,
  toggleDetailsModal: func.isRequired
};

StoryPane.defaultProps = {};
