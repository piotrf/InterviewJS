import { func, object, arrayOf } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Form,
  Icon,
  Separator,
  Text,
  color,
  setSpace
} from "interviewjs-styleguide";

import IntervieweeForm from "./IntervieweeForm";

const Interviewees = css.ul`
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

export default class IntervieweesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        interviewees: this.props.interviewees
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleAddInterviewee = this.toggleAddInterviewee.bind(this);
    this.toggleEditInterviewee = this.toggleEditInterviewee.bind(this);
    this.updateInterviewee = this.updateInterviewee.bind(this);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }
  toggleAddInterviewee() {
    console.log("toggleAddInterviewee");
  }
  toggleEditInterviewee() {
    console.log("toggleEditInterviewee");
  }
  updateInterviewee(data) {
    console.log("updateInterviewee", data);
  }
  render() {
    const { interviewees } = this.props;
    const getFormBody = () => {
      if (interviewees.length === 0) {
        return <IntervieweeForm handleSubmit={this.updateInterviewee} />;
      }
      return (
        <Container rounded bordered>
          <Interviewees>
            {interviewees.map((interviewee, i) => (
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
                  <Action iconic secondary onClick={this.toggleEditInterviewee}>
                    <Icon name="pencil" />
                  </Action>
                </Container>
              </Interviewee>
            ))}
          </Interviewees>
          <Container padded>
            <Action onClick={this.toggleAddInterviewee}>
              <Icon name="plus" size="s" /> Add new
            </Action>
          </Container>
        </Container>
      );
    };
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        {getFormBody()}
        <Separator size="m" silent />
        <Actionbar>
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

IntervieweesForm.propTypes = {
  handleSubmit: func.isRequired,
  interviewees: arrayOf(object)
};

IntervieweesForm.defaultProps = {
  interviewees: []
};

IntervieweesForm.defaultProps = {};
