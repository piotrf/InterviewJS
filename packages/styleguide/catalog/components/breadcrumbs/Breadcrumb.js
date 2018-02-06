import React from "react";
import css from "styled-components";
import { array, oneOfType, node, string } from "prop-types";

import { color, font, radius, setSpace, setType, time } from "../../../utils";

const BreadcrumbEl = css.li`
  ${setSpace("pts")};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: color ${time.m};

  ${({ state }) =>
    state === "passed"
      ? `
    cursor: pointer;
    color: ${color.blueM};
  `
      : ``};
  ${({ state }) =>
    state === "active"
      ? `
    cursor: pointer;
    color: ${color.blueBlk};
  `
      : ``};
  ${({ state }) =>
    state === "locked"
      ? `
    color: ${color.greyM};
  `
      : ``};

  /* horizontal lines connecting breadcrumbs */

  & > span:first-child::before,
  & > span:first-child::after {
    border-bottom: 1px solid ${color.greyLt};
    bottom: 50%;
    content: ' ';
    display: block;
    height: 1px;
    position: absolute;
    width: 280px;
    z-index: 100;
  }
  & > span:first-child::before {
    right: 100%;
    transform: translateX(-1px);
  }
  & > span:first-child::after {
    left: 100%;
    transform: translateX(1px);
  }
  &:first-child > span:first-child::before,
  &:last-child > span:first-child::after {
    display: none;
  }

`;

const BreadcrumbIndex = css.span`
  ${setSpace("mbs")};
  border-radius: ${radius.a};
  border-style: solid;
  border-width: 1px;
  height: 15px;
  position: relative;
  width: 15px;
  transition:
    background-color ${time.m},
    border-color ${time.m},
    color ${time.m}
  ;
  z-index: 500;

  ${({ state }) =>
    state === "passed"
      ? `
    background-color: ${color.blueM};
    border-color: ${color.blueM};
  `
      : ``};
  ${({ state }) =>
    state === "active"
      ? `
    background-color: ${color.blueBlk};
    border-color: ${color.blueBlk};
  `
      : ``};
  ${({ state }) =>
    state === "locked"
      ? `
    border-color: ${color.greyLt};
  `
      : ``};

`;

const BreadcrumbLabel = css.span`
  ${setType("x")};
  font-family: ${font.serif};
`;

const Breadcrumb = props => (
  <BreadcrumbEl {...props}>
    <BreadcrumbIndex state={props.state} />
    <BreadcrumbLabel>{props.children}</BreadcrumbLabel>
  </BreadcrumbEl>
);

Breadcrumb.propTypes = {
  children: oneOfType([array, string, node]),
  state: string
};

Breadcrumb.defaultProps = {
  children: null,
  state: "locked"
};

export default Breadcrumb;
