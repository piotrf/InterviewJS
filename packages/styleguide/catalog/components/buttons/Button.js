import React from "react";
import css from "styled-components";
import { bool, oneOfType, array, object, string, func } from "prop-types";

import {
  color,
  font,
  radius,
  setSpace,
  setType,
  setSize,
  time
} from "../../../utils";

const buttonBase = `
  ${setSize("hl")};
  ${setSpace("phm")};
  ${setType("x")};
  align-content: center;
  align-items: center;
  border-radius: ${radius.a};
  border: none;
  box-shadow: 0 2px 4px ${color.blackLt};
  cursor: pointer;
  display: inline-block;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${font.pri};
  justify-content: center;
  line-height: 1.2em;
  max-width: 160px;
  outline: none;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: background-color ${time.l}, box-shadow ${time.s}, color ${time.l};
  i {
    ${setType("s")};
    &:not(:only-child) {
      ${setSpace("mrx")};
    }
  }
  &:active {
    box-shadow: 0 1px 2px ${color.blackHL};
  }
`;

const iconicButtonBase = `
  ${setSize("hm")};
  ${setSize("wm")};
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const primaryButtonBase = `
  background-color: ${color.blueM};
  color: ${color.whiteBlk};
  &:hover {
    background-color: ${color.blueHD};
    color: ${color.white};
  }
`;

const secondaryButtonBase = `
  background: ${color.white};
  color: ${color.blueM};
  &:hover {
    color: ${color.blueHD};
  }
`;

const ButtonEl = css.button`
  ${buttonBase};
  ${props =>
    props.primary ? `${primaryButtonBase}` : `${secondaryButtonBase}`};
  ${props => (props.iconic ? `${iconicButtonBase}` : ``)};
`;

const LinkEl = css.a`
  ${buttonBase};
  ${props =>
    props.primary ? `${primaryButtonBase}` : `${secondaryButtonBase}`};
  ${props => (props.iconic ? `${iconicButtonBase}` : ``)};
`;

const Button = props =>
  props.handleClick ? (
    <ButtonEl {...props} onClick={props.handleClick} />
  ) : (
    <LinkEl {...props} href={props.href} target={props.target} />
  );

Button.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  iconic: bool,
  primary: bool,
  secondary: bool,
  target: string
};

Button.defaultProps = {
  handleClick: null,
  href: null,
  iconic: false,
  primary: false,
  secondary: false,
  target: null
};

export default Button;
