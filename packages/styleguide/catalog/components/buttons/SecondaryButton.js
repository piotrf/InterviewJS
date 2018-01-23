import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../../utils";

import { ButtonEl, LinkEl } from "./ButtonEl";

const secondaryButtonBase = props => `
  background: ${color.white};
  color: ${color.blueM};
  &:hover {
    color: ${color.blueHD};
  }
`;

const SecondaryButtonEl = ButtonEl.extend`
  ${secondaryButtonBase};
`;
const SecondaryLinkEl = LinkEl.extend`
  ${secondaryButtonBase};
`;

const SecondaryButton = props =>
  props.handleClick !== null ? (
    <SecondaryButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </SecondaryButtonEl>
  ) : (
    <SecondaryLinkEl {...props} href={props.href} target={props.target}>
      {props.children}
    </SecondaryLinkEl>
  );

SecondaryButton.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  target: string
};

SecondaryButton.defaultProps = {
  handleClick: null,
  href: null,
  target: null
};

export default SecondaryButton;
