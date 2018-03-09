import css from "styled-components";
import React from "react";
import { array, bool, func, node, oneOfType, string } from "prop-types";

import { color, font, setSpace, setType, time } from "../../../utils";

const TabEl = css.li`
  ${setSpace("mhs")};
  & > button {
    ${setSpace("phs")};
    ${setSpace("pvx")};
    ${setType("m")};
    background: none;
    border: none;
    box-shadow: none;
    color: ${({ active }) => (active ? color.blueM : color.greyBlk)};
    cursor: pointer;
    font-family: ${font.serif};
    font-weight: normal;
    transition: color ${time.m};
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
`;

const Tab = (props) => (
  <TabEl {...props}>
    <button onClick={props.onClick}>{props.children}</button>
  </TabEl>
);

Tab.propTypes = {
  active: bool,
  children: oneOfType([array, string, node]).isRequired,
  onClick: func
};

Tab.defaultProps = {
  active: false,
  onClick: null
};

export default Tab;
