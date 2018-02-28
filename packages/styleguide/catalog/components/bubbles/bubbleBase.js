import { keyframes } from "styled-components";

import { setSpace, setType, time } from "../../../utils";

const fader = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bubbleBase = `
  ${setSpace("phm")};
  ${setSpace("pvs")};
  ${setType("x")};};
  animation-delay: 0ms;
  animation-direction: normal;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: ${fader};
  animation-play-state: running;
  animation-timing-function: ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
  min-height: 40px;
  opacity: 0;
  perspective: 1000;
  transition: border-radius ${time.m};
  will-change: transform;
  &:not(:last-child),
  &:not(:first-child) {
    margin-bottom: 1px;
    margin-top: 1px;
  }
  & > p {
    ${setSpace("pan")};
    ${setSpace("man")};
  }
`;

export default bubbleBase;
