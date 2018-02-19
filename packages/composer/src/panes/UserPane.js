import css from "styled-components";
import React from "react";
import {} from "prop-types";

import { Container, color, radius, setSpace } from "interviewjs-styleguide";

const PaneEl = css(Container)`
  align-items: stretch;
  height: 100%;
  overflow: hidden;
`;

const PaneBubbleEditor = css(Container)`
  box-shadow: 0 1px 3px ${color.shadowWt};
  ${setSpace("pas")};
  border-radius: ${radius.l};
  border: 1px solid ${color.greyHL};
  width: 100%;
  height: 100%;
`;

export default class UserPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    return (
      <PaneEl fill="white" rounded shift dir="column">
        <Container flex={[1, 1, "100%"]} padded>
          Body
        </Container>
        <Container flex={[0, 0, `180px`]} padded>
          <PaneBubbleEditor fill="grey">PaneBubbleEditor</PaneBubbleEditor>
        </Container>
      </PaneEl>
    );
  }
}

UserPane.propTypes = {};

UserPane.defaultProps = {};
