import React from "react";
import css from "styled-components";
import { func } from "prop-types";

import { Action, Container, Icon } from "interviewjs-styleguide";

const TopbarEl = css(Container)`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`;

const TopbarHolder = css(Container)`
  align-content: flex-end;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Topbar = props => (
  <TopbarEl {...props}>
    <TopbarHolder limit="m" padded>
      <Container flex={[0, 0, `${100 / 2}%`]} align="left">
        {props.handleBack ? (
          <Action inverted iconic onClick={props.handleBack}>
            <Icon name="arrow-left" size="x" />
          </Action>
        ) : null}
      </Container>
      <Container flex={[0, 0, `${100 / 2}%`]} align="right">
        <Action inverted iconic onClick={props.handleDetails}>
          <Icon name="info" />
        </Action>
      </Container>
    </TopbarHolder>
  </TopbarEl>
);

Topbar.propTypes = {
  handleBack: func,
  handleDetails: func.isRequired,
};

Topbar.defaultProps = {
  handleBack: null,
};

export default Topbar;
