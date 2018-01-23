import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../../utils";

import { ButtonEl, LinkEl } from "./ButtonEl";

const primaryButtonBase = props => `
  background-color: ${color.blueM};
  color: ${color.whiteBlk};
  &:hover {
    background-color: ${color.blueHD};
    color: ${color.white};
  }
`;

const PrimaryButtonEl = ButtonEl.extend`
  ${primaryButtonBase};
`;
const PrimaryLinkEl = LinkEl.extend`
  ${primaryButtonBase};
`;

const PrimaryButton = props =>
  props.handleClick !== null ? (
    <PrimaryButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </PrimaryButtonEl>
  ) : (
    <PrimaryLinkEl {...props} href={props.href} target={props.target}>
      {props.children}
    </PrimaryLinkEl>
  );

PrimaryButton.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  target: string
};

PrimaryButton.defaultProps = {
  handleClick: null,
  href: null,
  target: null
};

export default PrimaryButton;
