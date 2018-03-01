import { func, number, object } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Container,
  Icon,
  PaneTab,
  PaneTabs,
  color,
  radius,
  setSpace
} from "interviewjs-styleguide";

import { SrcTextEditor } from "../";

const PaneEl = css(Container)`
  align-items: stretch;
  height: 100%;
  overflow: hidden;
  ${PaneTabs} {
    transform: translateY(-1px);
  }
`;

const PaneBubbleEditor = css(Container)`
  box-shadow: 0 1px 3px ${color.shadowWt};
  ${setSpace("pas")};
  border-radius: ${radius.l};
  border: 1px solid ${color.greyHL};
  width: 100%;
  height: 100%;
`;

const TabContent = css.div`
  ${setSpace("mhm")};
  ${setSpace("ptm")};
  height: 100%;
  position: relative;
`;

export default class IntervieweePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "text" };
    this.updateInterviewee = this.updateInterviewee.bind(this);
  }
  updateInterviewee(data) {
    const { storyIndex, currentInterviewee } = this.props;
    const { interviewees } = this.props.story;
    const intervieweeData = {
      ...interviewees[currentInterviewee],
      srcText: data
    };
    this.props.updateInterviewee(
      storyIndex,
      currentInterviewee,
      intervieweeData
    );
  }
  render() {
    const { tab } = this.state;
    const { currentInterviewee, story } = this.props;
    const { srcText } = story.interviewees[currentInterviewee];
    const getPaneContent = () => {
      switch (tab) {
        case "link":
          return <TabContent>link</TabContent>;
        case "image":
          return <TabContent>image</TabContent>;
        case "embed":
          return <TabContent>embed</TabContent>;
        case "map":
          return <TabContent>map</TabContent>;
        case "document":
          return <TabContent>document</TabContent>;
        case "media":
          return <TabContent>media</TabContent>;
        case "text":
        default:
          return (
            <TabContent>
              <SrcTextEditor
                srcText={srcText}
                updateInterviewee={this.updateInterviewee}
              />
            </TabContent>
          );
      }
    };
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <Container flex={[0, 0, "auto"]}>
          <PaneTabs>
            <PaneTab
              active={this.state.tab === "text"}
              onClick={() => this.setState({ tab: "text" })}
            >
              <Icon name="text" size="s" />
            </PaneTab>
            <PaneTab
              active={this.state.tab === "link"}
              onClick={() => this.setState({ tab: "link" })}
            >
              <Icon name="link" size="s" />
            </PaneTab>
            <PaneTab
              active={this.state.tab === "image"}
              onClick={() => this.setState({ tab: "image" })}
            >
              <Icon name="image" size="s" />
            </PaneTab>
            <PaneTab
              active={this.state.tab === "embed"}
              onClick={() => this.setState({ tab: "embed" })}
            >
              <Icon name="embed" size="s" />
            </PaneTab>
            <PaneTab
              active={this.state.tab === "map"}
              onClick={() => this.setState({ tab: "map" })}
            >
              <Icon name="map" size="s" />
            </PaneTab>
            <PaneTab
              active={this.state.tab === "media"}
              onClick={() => this.setState({ tab: "media" })}
            >
              <Icon name="media" size="s" />
            </PaneTab>
          </PaneTabs>
        </Container>
        <Container flex={[1, 1, "100%"]}>{getPaneContent()}</Container>
        <Container flex={[0, 0, `200px`]} padded>
          <PaneBubbleEditor fill="grey">PaneBubbleEditor</PaneBubbleEditor>
        </Container>
      </PaneEl>
    );
  }
}

IntervieweePane.propTypes = {
  currentInterviewee: number.isRequired,
  storyIndex: number.isRequired,
  story: object.isRequired,
  updateInterviewee: func.isRequired
};

IntervieweePane.defaultProps = {};
