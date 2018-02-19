import css from "styled-components";
import React from "react";
import {} from "prop-types";

import { Container, PaneTabs, PaneTab } from "interviewjs-styleguide";

const PaneEl = css(Container)`
  height: 100%;
  overflow: hidden;
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
      <PaneEl fill="white" rounded shift>
        <PaneTabs>
          <PaneTab
            active={this.state.tab === "text"}
            onClick={() => this.setState({ tab: "text" })}
          >
            T
          </PaneTab>
          <PaneTab
            active={this.state.tab === "link"}
            onClick={() => this.setState({ tab: "link" })}
          >
            L
          </PaneTab>
          <PaneTab
            active={this.state.tab === "image"}
            onClick={() => this.setState({ tab: "image" })}
          >
            I
          </PaneTab>
          <PaneTab
            active={this.state.tab === "embed"}
            onClick={() => this.setState({ tab: "embed" })}
          >
            E
          </PaneTab>
          <PaneTab
            active={this.state.tab === "map"}
            onClick={() => this.setState({ tab: "map" })}
          >
            M
          </PaneTab>
          <PaneTab
            active={this.state.tab === "document"}
            onClick={() => this.setState({ tab: "document" })}
          >
            D
          </PaneTab>
          <PaneTab
            active={this.state.tab === "media"}
            onClick={() => this.setState({ tab: "media" })}
          >
            M
          </PaneTab>
        </PaneTabs>
        {getPaneContent()}
      </PaneEl>
    );
  }
}

IntervieweePane.propTypes = {};

IntervieweePane.defaultProps = {};
