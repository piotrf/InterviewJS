import css from "styled-components";
import React from "react";
import { array, bool, func, node, oneOfType, string } from "prop-types";

import { color, font, setSpace, setType, time } from "../../../utils";

const PaneTabEl = css.li`
  flex: 1 1 100%;
  & > button {
    ${setSpace("phm")};
    ${setSpace("pvs")};
    ${setType("s")};
    background: none;
    border: none;
    box-shadow: none;
    color: ${({ active }) => (active ? color.blueM : color.greyBlk)};
    cursor: pointer;
    display: block;
    font-family: ${font.serif};
    font-weight: normal;
    text-align: center;
    transition: color ${time.m};
    width: 100%;
    &:hover {
      color: ${color.blueM};
    }
    &:active {
      color: ${color.blueM};
    }
    &:focus {
      outline: none;
    }
  }
  ${({ active }) =>
    active
      ? `
    background: ${color.white};
    &:not(:first-child) {
      border-left: 1px solid ${color.greyHL};
    }
    &:not(:last-child) {
      border-right: 1px solid ${color.greyHL};
    }
    borer-bottom: 1px solid ${color.white};
  `
      : `
        border-bottom: 1px solid ${color.greyHL};
      `}
`;

const PaneTab = (props) => (
  <PaneTabEl {...props}>
    <button onClick={props.onClick}>{props.children}</button>
  </PaneTabEl>
);

PaneTab.propTypes = {
  active: bool,
  children: oneOfType([array, string, node]).isRequired,
  onClick: func
};

PaneTab.defaultProps = {
  active: false,
  onClick: null
};

export default PaneTab;
