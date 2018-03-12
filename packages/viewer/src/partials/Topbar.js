import React from "react";
import css from "styled-components";
import { func } from "prop-types";

import { Action, Icon, Actionbar, Container } from "interviewjs-styleguide";

const TopbarEl = css(Container)`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`;

const Topbar = (props) => (
  <TopbarEl {...props}>
    <Container limit="m" padded>
      <Actionbar satellite={props.handleBack !== null ? "both" : "right"}>
        &nbsp;
        {props.handleBack ? (
          <Action inverted iconic onClick={props.handleBack}>
            <Icon name="arrow-left" size="x" />
          </Action>
        ) : null}
        <Action inverted iconic onClick={props.handleDetails}>
          ?
        </Action>
      </Actionbar>
    </Container>
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
