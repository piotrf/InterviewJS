import css from "styled-components";
import React from "react";
import { array, node, oneOfType, string } from "prop-types";
import { Tooltip } from "react-tippy";

require("./contextuals.css");

const DropdownEl = css(Tooltip)`

`;

const Dropdown = props => (
  <DropdownEl
    animation="scale"
    arrow
    arrowSize="small"
    effect="solid"
    hideDelay={350}
    html={props.children}
    interactiveBorder={5}
    position={props.position}
    sticky
    theme="light"
    trigger="click"
    {...props}
  />
);

Dropdown.propTypes = {
  children: oneOfType([array, string, node]).isRequired,
  position: string
};

Dropdown.defaultProps = {
  position: "bottom"
};

export default Dropdown;
