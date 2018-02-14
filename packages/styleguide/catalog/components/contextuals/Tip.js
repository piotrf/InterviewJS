import css from "styled-components";
import React from "react";
import { string } from "prop-types";
import { Tooltip } from "react-tippy";

require("./contextuals.css");

const TipEl = css(Tooltip)`

`;

const Tip = props => (
  <TipEl
    animation="fade"
    arrow
    arrowSize="small"
    hideDelay={350}
    interactiveBorder={5}
    position={props.position}
    sticky
    theme="dark"
    title={props.title}
    {...props}
  />
);

Tip.propTypes = {
  title: string.isRequired,
  position: string
};

Tip.defaultProps = {
  position: "bottom"
};

export default Tip;
