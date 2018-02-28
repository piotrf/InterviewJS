import css from "styled-components";
import React from "react";
import {} from "prop-types";

import {
  Container,
  Icon,
  PaneTab,
  PaneTabs,
  color,
  radius,
  setSpace
} from "interviewjs-styleguide";

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

export default class IntervieweePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "text" };
    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    const { tab } = this.state;
    const getPaneContent = () => {
      switch (tab) {
        case "link":
          return <span>link</span>;
        case "image":
          return <span>image</span>;
        case "embed":
          return <span>embed</span>;
        case "map":
          return <span>map</span>;
        case "document":
          return <span>document</span>;
        case "media":
          return <span>media</span>;
        case "text":
        default:
          return <span>text</span>;
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
        <Container flex={[1, 1, "100%"]} padded>
          {getPaneContent()}
        </Container>
        <Container flex={[0, 0, `200px`]} padded>
          <PaneBubbleEditor fill="grey">PaneBubbleEditor</PaneBubbleEditor>
        </Container>
      </PaneEl>
    );
  }
}

IntervieweePane.propTypes = {};

IntervieweePane.defaultProps = {};
