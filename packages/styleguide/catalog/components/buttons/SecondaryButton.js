import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../../utils";

import { ButtonEl } from "./ButtonEl";

const secondaryButtonBase = props => `
  background: ${color.white};
  color: ${color.brandColorM};
  &:hover {
    color: ${color.brandColorBlk};
  }
`;

const SecondaryButtonEl = ButtonEl.extend`
  ${secondaryButtonBase};
`;

const SecondaryButton = props => (
  <SecondaryButtonEl {...props} onClick={props.handleClick} href={props.href}>
    {props.children}
  </SecondaryButtonEl>
);

SecondaryButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
