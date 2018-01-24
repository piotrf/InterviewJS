import React from "react";
import css from "styled-components";
import { bool, oneOfType, array, object, string, func } from "prop-types";

import {
  color,
  font,
  setHeight,
  setSpace,
  setType,
  time
} from "../../../utils";

const linkBase = `
  ${setHeight("s")};
  ${setSpace("pan")};
  ${setType("x")};
  align-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  border-style: solid;
  border-width: 0 0 1px;
  cursor: pointer;
  display: inline-block;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${font.pri};
  font-weight: bold;
  justify-content: center;
  line-height: 1.2em;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: border-color ${time.l}, color ${time.l};
  white-space: nowrap;
  i {
    ${setType("s")};
    &:not(:only-child) {
      ${setSpace("mrx")};
    }
  }
`;

const primaryLinkBase = `
  color: ${color.blueM};
  &:hover {
    border-color: ${color.blueM};
  }
`;

const secondaryLinkBase = `
  color: ${color.blueBlk};
  &:hover {
    border-color: ${color.blueBlk};
  }
`;

const invertedLinkBase = `
  color: ${color.white};
  &:hover {
    border-color: ${color.white};
  }
`;

const alertLinkBase = `
  color: ${color.redM};
  &:hover {
    border-color: ${color.redM};
  }
`;

const ButtonEl = css.button`
  ${linkBase};
  ${props => {
    if (props.primary) {
      return `${primaryLinkBase}`;
    } else if (props.alert) {
      return `${alertLinkBase}`;
    } else if (props.inverted) {
      return `${invertedLinkBase}`;
    }
    return `${secondaryLinkBase}`;
  }};
`;

const LinkEl = css.a`
  ${linkBase};
  ${props => {
    if (props.primary) {
      return `${primaryLinkBase}`;
    } else if (props.alert) {
      return `${alertLinkBase}`;
    } else if (props.inverted) {
      return `${invertedLinkBase}`;
    }
    return `${secondaryLinkBase}`;
  }};
`;

const Link = props =>
  props.handleClick ? (
    <ButtonEl {...props} onClick={props.handleClick} />
  ) : (
    <LinkEl {...props} href={props.href} target={props.target} />
  );

Link.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  iconic: bool,
  primary: bool,
  secondary: bool,
  target: string
};

Link.defaultProps = {
  handleClick: null,
  href: null,
  iconic: false,
  primary: false,
  secondary: false,
  target: null
};

export default Link;
