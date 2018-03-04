import css from "styled-components";
import React from "react";
import { bool, string } from "prop-types";

import { color, font, radius, setSpace, setType, time } from "../../../utils";

require("../icons/iconfont/style.css");

const CheckboxEl = css.label`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  ${setType("s")};
  color: ${color.blueBlk};
  cursor: pointer;
  display: block;
  font-family: ${font.serif};
  padding-left: 26px;
  position: relative;
  user-select: none;
`;

const CheckboxCheck = css.span`
  ${setSpace("mrs")};
  ${setType("m")};
  border-radius: ${radius.s};
  border: 1px solid ${color.greyM};
  color: ${color.blueM};
  display: inline-block;
  height: 18px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background ${time.m}, border ${time.m};
  width: 18px;
  &:after {
    color: ${color.blueM};
    border-radius: ${radius.x};
    content: "";
    display: none;
    font-size: 16px;
    font-weight: bold;
    height: 12px;
    left: 2px;
    background: ${color.blueM};
    position: absolute;
    text-align: center;
    top: 2px;
    transition: display ${time.m};
    width: 12px;
  }
`;

const CheckboxInput = css.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  &:checked ~ ${CheckboxCheck} {
    border-color: ${color.blueM};
    &:after {
      display: block;
    }
  }
`;

const Checkbox = (props) => (
  <CheckboxEl>
    <CheckboxInput type="checkbox" checked={props.checked} onChac />
    <CheckboxCheck />
    {props.children}
  </CheckboxEl>
);

Checkbox.propTypes = { checked: bool };

Checkbox.defaultProps = { checked: null };

export default Checkbox;
