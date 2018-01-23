import React from "react";
import { bool, oneOfType, array, object, string, func } from "prop-types";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Button = props => {
  const { primary, secondary } = props;
  if (primary) {
    return <PrimaryButton {...props} />;
  }
  return <SecondaryButton {...props} />;
};

Button.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  primary: bool,
  secondary: bool
};

Button.defaultProps = {
  handleClick: null,
  href: null,
  primary: false,
  secondary: false
};

export default Button;
