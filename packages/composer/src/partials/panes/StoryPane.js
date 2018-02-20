import css from "styled-components";
import React from "react";
import StayScrolled from "react-stay-scrolled";
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

import { Storyline } from "../";

const PaneEl = css(Container)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
    ${setSpace("pam")};
    display: block;
    height: 100%;
    overflow: auto;
    width: 100%;
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

export default class StoryPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <Action secondary iconic onClick={this.props.toggleModal}>
                  <Icon name="pencil" size="x" />
                </Action>
              </Tip>
            </IntervieweesAction>
          </IntervieweesWrapper>
        </PaneHead>
        <PaneBody>
          <StayScrolled>
            <Storyline
              interviewee={interviewees[currentInterviewee]}
              storyline={storyline}
            />
          </StayScrolled>
        </PaneBody>
      </PaneEl>
    );
  }
}

StoryPane.propTypes = {
  switchInterviewee: func.isRequired,
  currentInterviewee: number.isRequired,
  toggleModal: func.isRequired,
  story: shape({
    interviewees: array.isRequired
  }).isRequired
};

StoryPane.defaultProps = {};
