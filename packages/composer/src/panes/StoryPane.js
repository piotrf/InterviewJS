import css from "styled-components";
import React from "react";
import { array, func, shape, number } from "prop-types";

import {
  Action,
  Avatar,
  Container,
  Icon,
  Tip,
  radius,
  setSize,
  setSpace,
  skin,
  time
} from "interviewjs-styleguide";

const PaneEl = css(Container)`
  height: 100%;
  position: relative;
`;

const PaneHead = css.div`
  bottom: 100%;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  transform: translateY(50%);
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
    min-height: auto;
    padding: 0;
    border-width: 2px;
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

export default class StoryPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    const { interviewees } = this.props.story;
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
                  secondary
                  iconic
                  onClick={this.props.toggleEditInterviewees}
                >
                  <Icon name="pencil" size="x" />
                </Action>
              </Tip>
            </IntervieweesAction>
          </IntervieweesWrapper>
        </PaneHead>
        <Container padded>
          <pre>
            {
              // this.props.story.interviewees[this.props.currentInterviewee].storyline
            }
          </pre>
        </Container>
      </PaneEl>
    );
  }
}

StoryPane.propTypes = {
  switchInterviewee: func.isRequired,
  currentInterviewee: number.isRequired,
  toggleEditInterviewees: func.isRequired,
  story: shape({
    interviewees: array.isRequired
  }).isRequired
};

StoryPane.defaultProps = {};
