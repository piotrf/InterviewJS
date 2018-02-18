import { arrayOf, func, number, object } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Icon,
  Separator,
  Text,
  color,
  setSpace
} from "interviewjs-styleguide";

import IntervieweeForm from "../forms/IntervieweeForm";

const IntervieweesList = css.ul`
  display: block;
`;
const Interviewee = css.li`
  ${setSpace("pam")};
  align-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: row;
  jusitfy-content: space-between;
  & > *:nth-child(2) {
    ${setSpace("phm")};
  }
`;
const IntervieweeName = css(Text.withComponent("h2"))`
  color: ${color.blueBlk};
`;
const IntervieweeTitle = css(Text)`

`;
const IntervieweeBio = css(Text.withComponent("p"))`

`;

export default class Interviewees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        interviewees: this.props.interviewees
      }
    };
    this.createInterviewee = this.createInterviewee.bind(this);
    this.deleteInterviewee = this.deleteInterviewee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleAddInterviewee = this.toggleAddInterviewee.bind(this);
    this.toggleEditInterviewee = this.toggleEditInterviewee.bind(this);
    this.updateInterviewee = this.updateInterviewee.bind(this);
  }
  handleSubmit() {
    this.props.handleSubmit(this.state.formData);
  }
  createInterviewee(data) {
    this.props.createInterviewee(this.props.storyIndex, data);
  }
  updateInterviewee(intervieweeIndex, data) {
    this.props.updateInterviewee(this.props.storyIndex, intervieweeIndex, data);
  }
  deleteInterviewee(intervieweeIndex) {
    this.props.deleteInterviewee(this.props.storyIndex, intervieweeIndex);
  }
  toggleAddInterviewee() {
    console.log("toggleAddInterviewee");
  }
  toggleEditInterviewee() {
    console.log("toggleEditInterviewee");
  }
  render() {
    const { interviewees } = this.props;
    const getFormBody = () => {
      if (interviewees.length === 0) {
        return <IntervieweeForm handleSubmit={this.createInterviewee} />;
      }
      return (
        <Container>
          <Container rounded bordered>
            <IntervieweesList>
              {interviewees.map((interviewee) => (
                <Interviewee key={interviewee.name}>
                  <Container flex={[1, 1, "auto"]}>
                    <Avatar image={interviewee.avatar} size="l" />
                  </Container>
                  <Container flex={[1, 2, "100%"]} align="left">
                    <IntervieweeName typo="p1">
                      {interviewee.name}
                    </IntervieweeName>
                    <IntervieweeTitle typo="p5">
                      {interviewee.title}
                    </IntervieweeTitle>
                    <IntervieweeBio typo="p5">{interviewee.bio}</IntervieweeBio>
                  </Container>
                  <Container flex={[1, 1, "auto"]}>
                    <Action
                      iconic
                      secondary
                      onClick={this.toggleEditInterviewee}
                    >
                      <Icon name="pencil" />
                    </Action>
                  </Container>
                </Interviewee>
              ))}
            </IntervieweesList>
            <Container padded>
              <Action onClick={this.toggleAddInterviewee}>
                <Icon name="plus" size="s" /> Add new
              </Action>
            </Container>
          </Container>
          <Separator size="m" silent />
          <Actionbar>
            <Action fixed onClick={this.handleSubmit} primary>
              Save
            </Action>
          </Actionbar>
        </Container>
      );
    };
    return <Container>{getFormBody()}</Container>;
  }
}

Interviewees.propTypes = {
  createInterviewee: func.isRequired,
  deleteInterviewee: func.isRequired,
  handleSubmit: func.isRequired,
  storyIndex: number.isRequired,
  interviewees: arrayOf(object),
  updateInterviewee: func.isRequired
};

Interviewees.defaultProps = {
  interviewees: []
};

Interviewees.defaultProps = {};
