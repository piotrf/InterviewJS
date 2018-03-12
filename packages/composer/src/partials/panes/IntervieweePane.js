import { func, number, object } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Container,
  Icon,
  PaneTab,
  PaneTabs,
  Tip,
  radius
} from "interviewjs-styleguide";

import {
  EmbedPane,
  ImagePane,
  LinkPane,
  MapPane,
  MediaPane,
  TextPane
} from "./interviewee";

const PaneEl = css(Container)`
  align-items: stretch;
  height: 100%;
  overflow: visible;
  ${PaneTabs} {
    border-radius: ${radius.h} 21px 0 0;
    transform: translateY(-1px);
    & > *:first-child {
      border-radius: ${radius.h} 0 0 0;
    }
    & > *:last-child {
      border-radius: 0 ${radius.h} 0 0;
    }
  }
`;

export default class IntervieweePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: {
        text: { value: "" },
        link: { value: "", title: "" },
        image: {
          value: require("../../data/media/trump.png"), // TODO: this should come from the data model upon image upload @LAURIAN
          title: ""
        },
        embed: { value: "" },
        map: { value: "" },
        media: { value: "" }
      },
      tab: "text"
    };
    this.addStorylineItem = this.addStorylineItem.bind(this);
    this.updateDraft = this.updateDraft.bind(this);
    this.updateSrcText = this.updateSrcText.bind(this);
  }
  updateSrcText(data) {
    const { storyIndex, currentInterviewee, story } = this.props;
    const { interviewees } = story;
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
  updateDraft(data, type) {
    this.setState({ draft: { ...this.state.draft, [type]: data } });
  }
  addStorylineItem(source) {
    const { storyIndex, currentInterviewee } = this.props;
    const { draft } = this.state;
    const newIntervieweeBubble = {
      content: draft[source],
      role: "interviewee",
      type: this.state.tab
    };
    this.props.addStorylineItem(
      storyIndex,
      currentInterviewee,
      newIntervieweeBubble
    );
    this.setState({
      draft: { ...this.state.draft, [source]: { value: "", title: "" } }
    });
  }
  render() {
    const { tab } = this.state;
    const { currentInterviewee, story } = this.props;
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <Container flex={[0, 0, "auto"]}>
          <PaneTabs>
            <PaneTab
              active={tab === "text"}
              onClick={() => this.setState({ tab: "text" })}
              opinionated
            >
              <Tip title="Text bubble">
                <Icon name="text" size="s" />
              </Tip>
            </PaneTab>
            <PaneTab
              active={tab === "link"}
              onClick={() => this.setState({ tab: "link" })}
              opinionated
            >
              <Tip title="Link bubble">
                <Icon name="link" size="s" />
              </Tip>
            </PaneTab>
            <PaneTab
              active={tab === "image"}
              onClick={() => this.setState({ tab: "image" })}
              opinionated
            >
              <Tip title="Image bubble">
                <Icon name="image" size="s" />
              </Tip>
            </PaneTab>
            <PaneTab
              active={tab === "embed"}
              onClick={() => this.setState({ tab: "embed" })}
              opinionated
            >
              <Tip title="Embed bubble">
                <Icon name="embed" size="s" />
              </Tip>
            </PaneTab>
            <PaneTab
              active={tab === "map"}
              onClick={() => this.setState({ tab: "map" })}
              opinionated
            >
              <Tip title="Map bubble">
                <Icon name="map" size="s" />
              </Tip>
            </PaneTab>
            <PaneTab
              active={tab === "media"}
              onClick={() => this.setState({ tab: "media" })}
              opinionated
            >
              <Tip title="Media bubble">
                <Icon name="media" size="s" />
              </Tip>
            </PaneTab>
          </PaneTabs>
        </Container>
        <Container flex={[1, 1, "100%"]}>
          <TextPane
            {...this.props}
            active={tab === "text"}
            addStorylineItem={() => this.addStorylineItem("text")}
            draft={this.state.draft.text}
            srcText={story.interviewees[currentInterviewee].srcText}
            updateDraft={(data) => this.updateDraft(data, "text")}
            updateSrcText={this.updateSrcText}
          />
          <LinkPane
            {...this.props}
            active={tab === "link"}
            addStorylineItem={() => this.addStorylineItem("link")}
            draft={this.state.draft.link}
            updateDraft={(data) => this.updateDraft(data, "link")}
          />
          <ImagePane
            {...this.props}
            active={tab === "image"}
            addStorylineItem={() => this.addStorylineItem("image")}
            draft={this.state.draft.image}
            updateDraft={(data) => this.updateDraft(data, "image")}
          />
          <EmbedPane
            {...this.props}
            active={tab === "embed"}
            addStorylineItem={() => this.addStorylineItem("embed")}
            draft={this.state.draft.embed}
            updateDraft={(data) => this.updateDraft(data, "embed")}
          />
          <MapPane
            {...this.props}
            active={tab === "map"}
            addStorylineItem={() => this.addStorylineItem("map")}
            draft={this.state.draft.map}
            updateDraft={(data) => this.updateDraft(data, "map")}
          />
          <MediaPane
            {...this.props}
            active={tab === "media"}
            draft={this.state.draft.media}
            updateDraft={(data) => this.updateDraft(data, "media")}
          />
        </Container>
      </PaneEl>
    );
  }
}

IntervieweePane.propTypes = {
  addStorylineItem: func.isRequired,
  currentBubble: number,
  currentInterviewee: number.isRequired,
  story: object.isRequired /* eslint react/forbid-prop-types: 0 */,
  storyIndex: number.isRequired,
  updateInterviewee: func.isRequired
};

IntervieweePane.defaultProps = {
  currentBubble: null
};
