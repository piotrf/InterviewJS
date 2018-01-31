import css from "styled-components";
import { shape, string } from "prop-types";

import { radius, skin } from "../../../utils";
import bubbleBase from "./bubbleBase";

const SystemBubble = css.div`
  ${bubbleBase};
  background-color: ${({ theme }) =>
    theme.backg ? theme.backg : skin.sysBackg};
  color: ${({ theme }) => (theme.color ? theme.color : skin.sysColor)};
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  width: 100%;
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.m};
    margin-bottom: 1px;
    margin-top: 1px;
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.m} ${radius.m};
  }
  &:last-child {
    border-radius: ${radius.m} ${radius.m} ${radius.h} ${radius.h};
  }
  &:only-child {
    border-radius: ${radius.h};
  }
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
    backg: skin.sysBackg,
    color: skin.sysColor,
    font: skin.font
  }
};

export default SystemBubble;
