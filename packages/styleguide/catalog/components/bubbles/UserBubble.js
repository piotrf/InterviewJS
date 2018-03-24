import css from "styled-components";
import { shape, string } from "prop-types";

import { color, radius, skin, setSpace } from "../../../utils";
import bubbleBase from "./bubbleBase";

const SystemBubble = css.div`
  ${bubbleBase};
  ${setSpace("mlm")};
  ${({ animated }) =>
    !animated
      ? `
    opacity: 1;
    animation: none;
  `
      : ``};
  align-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: ${({ theme }) =>
    theme.backg ? theme.backg : skin.userBackg};
  color: ${({ theme }) => (theme.color ? theme.color : skin.userColor)};
  flex-direction: row;
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};
  text-align: right;
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.h} ${radius.m} ${radius.m} ${radius.h};
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.m} ${radius.h};
  }
  &:last-child {
    border-radius: ${radius.h} ${radius.m} ${radius.s} ${radius.h};
  }
  &:only-child {
    border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.h};
  }
  ${({ plain }) =>
    plain
      ? `
    background: none;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    overflow: visible;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    width: 100%;
  `
      : ``};
`;

SystemBubble.propTypes = {
  theme: shape({
    backg: string,
    color: string,
    font: string
  })
};

SystemBubble.defaultProps = {
  theme: {
    backg: skin.userBackg,
    color: skin.userColor,
    font: skin.font
  }
};

export default SystemBubble;
