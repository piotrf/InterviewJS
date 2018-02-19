import css from "styled-components";
import React from "react";
import {} from "prop-types";

import {
  Action,
  Avatar,
  Container,
  Icon,
  Tip,
  setSize,
  setSpace
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

const IntervieweesButtonWrapper = css.span`
  ${setSpace("mlx")};
  display: inline-block;
  left: 100%;
  position: absolute;
  ${setSize("s")};
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
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
  text-align: center;
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
                <Interviewee key={interviewee.name}>
                  <Tip position="bottom" title={interviewee.name}>
                    <Action
                      secondary
                      iconic
                      onClick={() => console.log("interviewee")}
                    >
                      <Avatar image={interviewee.avatar} size="m" />
                    </Action>
                  </Tip>
                </Interviewee>
              ))}
            </Interviewees>
            <IntervieweesButtonWrapper>
              <Tip position="bottom" title="Manage interviewees">
                <Action secondary iconic onClick={this.props.editInterviewees}>
                  <Icon name="pencil" size="x" />
                </Action>
              </Tip>
            </IntervieweesButtonWrapper>
          </IntervieweesWrapper>
        </PaneHead>
        <Container padded>StoryPane</Container>
      </PaneEl>
    );
  }
}

StoryPane.propTypes = {};

StoryPane.defaultProps = {};
