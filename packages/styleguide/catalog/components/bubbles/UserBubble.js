import css from "styled-components";
import { shape, string } from "prop-types";

import { radius, skin } from "../../../utils";
import bubbleBase from "./bubbleBase";

const SystemBubble = css.div`
  ${bubbleBase};
  background-color: ${({ theme }) =>
    theme.backg ? theme.backg : skin.userBackg};
  color: ${({ theme }) => (theme.color ? theme.color : skin.userColor)};
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};
  align-self: flex-end;
  text-align: right;
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.h} ${radius.m} ${radius.m} ${radius.h};
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.m} ${radius.h};
  }
  &:last-child {
    border-radius: ${radius.h} ${radius.m} ${radius.m} ${radius.h};
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
    backg: skin.userBackg,
    color: skin.userColor,
    font: skin.font
  }
};

export default SystemBubble;
