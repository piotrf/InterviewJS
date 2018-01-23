import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../../utils";

import { ButtonEl } from "./ButtonEl";

const primaryButtonBase = props => `
  background: ${color.brandColorM};
  color: ${color.whiteBlk};
  &:hover {
    color: ${color.white};
  }
`;

const PrimaryButtonEl = ButtonEl.extend`
  ${primaryButtonBase};
`;

const PrimaryButton = props => (
  <PrimaryButtonEl {...props} onClick={props.handleClick} href={props.href}>
    {props.children}
  </PrimaryButtonEl>
);

PrimaryButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string
};

PrimaryButton.defaultProps = {};

export default PrimaryButton;
