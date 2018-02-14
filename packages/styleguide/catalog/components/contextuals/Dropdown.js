import React from "react";
import { array, node, oneOfType, string } from "prop-types";
import { Tooltip } from "react-tippy";

require("./contextuals.css");

const Dropdown = props => (
  <Tooltip
    animation="scale"
    arrow
    arrowSize="small"
    effect="solid"
    hideDelay={350}
    html={props.children}
    interactive
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
