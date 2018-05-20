/* eslint react/forbid-prop-types: 0 */
import { arrayOf, func, number, object, string } from "prop-types";
import styled from "styled-components";
import React from "react";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Icon,
  Separator,
  Text,
  Tip,
  color,
  radius,
  setSpace,
  setSize
} from "interviewjs-styleguide";

import { IntervieweeForm } from "../";

const SwapWrap = styled.div`
  display: none;
  left: 50%;
  position: absolute;
  top: 100%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;
const IntervieweesList = styled.ul`
  display: block;
  &:hover ${SwapWrap} {
    display: block;
  }
`;
const Interviewee = styled.li`
  ${setSpace("pam")};
  align-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.greyHL};
  display: flex;
  flex-direction: row;
  jusitfy-content: space-between;
  position: relative;
  & > *:nth-child(2) {
    ${setSpace("phm")};
  }
  & .swapPlaces {
    ${setSize("m")};
    background: ${color.white};
    border-radius: ${radius.a};
    border: 1px solid ${color.greyHL};
    display: inline-block;
  }
`;
const IntervieweeName = styled(Text.withComponent("h2"))`
  color: ${color.blueBlk};
`;
const IntervieweeTitle = styled(Text)`
  ${setSpace("mvx")};
  color: ${color.blueBlk};
  display: block;
`;
const IntervieweeBio = styled(Text.withComponent("p"))``;

export default class Interviewees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem: this.props.editItem
    };
    this.createInterviewee = this.createInterviewee.bind(this);
    this.deleteInterviewee = this.deleteInterviewee.bind(this);
    this.swapInterviewees = this.swapInterviewees.bind(this);
    this.toggleAddInterviewee = this.toggleAddInterviewee.bind(this);
    this.toggleEditInterviewee = this.toggleEditInterviewee.bind(this);
    this.updateInterviewee = this.updateInterviewee.bind(this);
  }
  createInterviewee(data) {
    this.props.createInterviewee(this.props.storyIndex, data);
    this.setState({ editItem: null });
  }
  updateInterviewee(data) {
    const { storyIndex } = this.props;
    const { editItem } = this.state;
    this.props.updateInterviewee(storyIndex, editItem, data);
    this.setState({ editItem: null });
  }
  deleteInterviewee(intervieweeIndex) {
    this.props.deleteInterviewee(this.props.storyIndex, intervieweeIndex);
  }
  swapInterviewees(intervieweeIndex) {
    this.props.pushInterviewee(this.props.storyIndex, intervieweeIndex);
  }
  toggleAddInterviewee() {
    this.setState({ editItem: "new" });
  }
  toggleEditInterviewee(i) {
    this.setState({ editItem: i });
  }
  render() {
    const { interviewees } = this.props;
    const getPartialBody = () => {
      if (interviewees.length > 0) {
        if (this.state.editItem === "new") {
          return (
            <IntervieweeForm
              handleCancel={() => this.setState({ editItem: null })}
              handleSubmit={this.createInterviewee}
              story={this.props.story}
              user={this.props.user}
            />
          );
        } else if (this.state.editItem === null) {
          return (
            <Container>
              <Container bordered rounded>
                <IntervieweesList>
                  {interviewees.map((interviewee, i) => (
                    <Interviewee key={i}>
                      <Container flex={[1, 1, "auto"]}>
                        <Avatar image={interviewee.avatar} size="l" />
                      </Container>
                      <Container
                        flex={[1, 2, "100%"]}
                        align="left"
                        style={{ position: "static" }}
                      >
                        <IntervieweeName typo="p4">
                          {interviewee.name}
                        </IntervieweeName>
                        <IntervieweeTitle typo="p5">
                          {interviewee.title}
                        </IntervieweeTitle>
                        <IntervieweeBio typo="p5">
                          {interviewee.bio}
                        </IntervieweeBio>
                        {interviewees.length > 1 &&
                        i !== interviewees.length - 1 ? (
                          <SwapWrap>
                            <Tip title="Swap places">
                              <Action
                                className="swapPlaces"
                                onClick={() => this.swapInterviewees(i)}
                              >
                                <Icon name="rearrange" size="x" />
                              </Action>
                            </Tip>
                          </SwapWrap>
                        ) : null}
                      </Container>
                      <Container flex={[1, 1, "auto"]}>
                        <Action
                          iconic
                          secondary
                          onClick={() => this.toggleEditInterviewee(i)}
                        >
                          <Icon name="pen" size="s" />
                        </Action>
                      </Container>
                    </Interviewee>
                  ))}
                </IntervieweesList>
                <Container padded align="center">
                  <Action onClick={this.toggleAddInterviewee}>
                    <Icon name="plus" size="x" /> Add interviewee
                  </Action>
                </Container>
              </Container>
              <Separator size="m" silent />
              <Actionbar>
                <Action fixed onClick={this.props.handleSubmit} primary>
                  {this.props.cta}
                </Action>
              </Actionbar>
            </Container>
          );
        }
        return (
          <IntervieweeForm
            allowDelete={interviewees.length > 1}
            deleteInterviewee={() =>
              this.deleteInterviewee(this.state.editItem)
            }
            handleCancel={() => this.setState({ editItem: null })}
            handleSubmit={this.updateInterviewee}
            interviewee={interviewees[this.state.editItem]}
            story={this.props.story}
            user={this.props.user}
          />
        );
      }
      return (
        <IntervieweeForm
          handleSubmit={this.createInterviewee}
          persistent
          story={this.props.story}
          user={this.props.user}
        />
      );
    };
    return <Container>{getPartialBody()}</Container>;
  }
}

Interviewees.propTypes = {
  createInterviewee: func.isRequired,
  cta: string,
  deleteInterviewee: func.isRequired,
  editItem: number,
  handleSubmit: func.isRequired,
  interviewees: arrayOf(object),
  pushInterviewee: func.isRequired,
  story: object.isRequired,
  storyIndex: number.isRequired,
  updateInterviewee: func.isRequired,
  user: object.isRequired
};

Interviewees.defaultProps = {
  editItem: null,
  cta: "Done",
  interviewees: []
};
