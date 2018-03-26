import React from "react";
import { string } from "prop-types";
import { Tooltip } from "react-tippy";

require("./contextuals.css");

const Tip = (props) => (
  <Tooltip
    animation="fade"
    arrow
    arrowSize="small"
    hideDelay={350}
    interactiveBorder={5}
    position={props.position}
    sticky
    theme="dark"
    title={props.title}
    touchHold
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
