import { func, number, object } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Container,
  Icon,
  PaneTab,
  PaneTabs,
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
      previews: {
        text: "",
        link: ""
      },
      tab: "text"
    };
    this.updatePreview = this.updatePreview.bind(this);
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
  updatePreview(data, type) {
    this.setState({ previews: { ...this.state.previews, [type]: data } });
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
            >
              <Icon name="text" size="s" />
            </PaneTab>
            <PaneTab
              active={tab === "link"}
              onClick={() => this.setState({ tab: "link" })}
            >
              <Icon name="link" size="s" />
            </PaneTab>
            <PaneTab
              active={tab === "image"}
              onClick={() => this.setState({ tab: "image" })}
            >
              <Icon name="image" size="s" />
            </PaneTab>
            <PaneTab
              active={tab === "embed"}
              onClick={() => this.setState({ tab: "embed" })}
            >
              <Icon name="embed" size="s" />
            </PaneTab>
            <PaneTab
              active={tab === "map"}
              onClick={() => this.setState({ tab: "map" })}
            >
              <Icon name="map" size="s" />
            </PaneTab>
            <PaneTab
              active={tab === "media"}
              onClick={() => this.setState({ tab: "media" })}
            >
              <Icon name="media" size="s" />
            </PaneTab>
          </PaneTabs>
        </Container>
        <Container flex={[1, 1, "100%"]}>
          <TextPane
            {...this.props}
            active={tab === "text"}
            preview={this.state.previews.text}
            srcText={story.interviewees[currentInterviewee].srcText}
            updatePreview={(data) => this.updatePreview(data, "text")}
            updateSrcText={this.updateSrcText}
          />
          <LinkPane
            {...this.props}
            active={tab === "link"}
            preview={this.state.previews.link}
            updatePreview={(data) => this.updatePreview(data, "link")}
          />
          <ImagePane
            {...this.props}
            active={tab === "image"}
            preview={this.state.previews.image}
            updatePreview={(data) => this.updatePreview(data, "image")}
          />
          <EmbedPane
            {...this.props}
            active={tab === "embed"}
            preview={this.state.previews.embed}
            updatePreview={(data) => this.updatePreview(data, "embed")}
          />
          <MapPane
            {...this.props}
            active={tab === "map"}
            preview={this.state.previews.map}
            updatePreview={(data) => this.updatePreview(data, "map")}
          />
          <MediaPane
            {...this.props}
            active={tab === "media"}
            preview={this.state.previews.media}
            updatePreview={(data) => this.updatePreview(data, "media")}
          />
        </Container>
      </PaneEl>
    );
  }
}

IntervieweePane.propTypes = {
  currentInterviewee: number.isRequired,
  story: object.isRequired /* eslint react/forbid-prop-types: 0 */,
  storyIndex: number.isRequired,
  updateInterviewee: func.isRequired
};

IntervieweePane.defaultProps = {};
