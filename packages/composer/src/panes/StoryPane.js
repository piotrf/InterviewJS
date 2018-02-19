import css from "styled-components";
import React from "react";
import {} from "prop-types";

import { Container } from "interviewjs-styleguide";

const PaneEl = css(Container)`
  height: 100%;
`;

export default class StoryPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    return (
      <PaneEl fill="white" rounded shift>
        <Container padded>StoryPane</Container>
      </PaneEl>
    );
  }
}

StoryPane.propTypes = {};

StoryPane.defaultProps = {};
