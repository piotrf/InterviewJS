import css, { keyframes } from "styled-components";
import { shape, string } from "prop-types";

import { radius, skin } from "../../../utils";
import bubbleBase from "./bubbleBase";

const fader = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0.5rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

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
    border-radius: ${radius.h} ${radius.m} ${radius.h} ${radius.h};
  }
  &:only-child {
    border-radius: ${radius.h};
  }
  ${({ animate, delay }) =>
    animate
      ? `
    animation-delay: ${delay}ms;
    animation-direction: normal;
    animation-duration: 400ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: ${fader};
    animation-play-state: running;
    animation-timing-function: ease-in;
    opacity: 0;
    perspective: 1000;
    will-change: transform;
  `
      : ``}
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
