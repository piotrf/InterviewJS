import React from "react";
import { array, number, object, oneOfType, string } from "prop-types";
import css, { keyframes } from "styled-components";

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

const Animate = css.div`
  animation-delay: ${(props) => props.delay}ms;
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
`;

const Animator = (props) => <Animate {...props}>{props.children}</Animate>;

Animator.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  delay: number
};

Animator.defaultProps = {
  delay: 0
};

export default Animator;
