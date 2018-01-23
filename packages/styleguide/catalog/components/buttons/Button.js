import React from "react";
import { bool, oneOfType, array, object, string, func } from "prop-types";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Button = props =>
  props.primary ? <PrimaryButton {...props} /> : <SecondaryButton {...props} />;

Button.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  primary: bool,
  secondary: bool,
  target: string
};

Button.defaultProps = {
  handleClick: null,
  href: null,
  primary: false,
  secondary: false,
  target: null
};

export default Button;
