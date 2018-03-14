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
  justify-content: ${({ spread }) => (spread ? `space-between` : `flex-end`)};
  align-content: flex-end;
  align-items: flex-end;
  display: flex;
  width: 100%;
`;

const Topbar = (props) => (
  <TopbarEl {...props}>
    <TopbarHolder limit="m" padded spread={!!props.handleBack}>
      {props.handleBack ? (
        <Action inverted iconic onClick={props.handleBack}>
          <Icon name="arrow-left" size="x" />
        </Action>
      ) : null}
      <Action inverted iconic onClick={props.handleDetails}>
        <Icon name="info" />
      </Action>
    </TopbarHolder>
  </TopbarEl>
);

Topbar.propTypes = {
  handleBack: func,
  handleDetails: func.isRequired
};

Topbar.defaultProps = {
  handleBack: null
};

export default Topbar;
