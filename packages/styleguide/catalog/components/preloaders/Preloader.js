import css, { keyframes } from "styled-components";
import React from "react";

import { color, radius } from "../../../utils";

const bouncedelay = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const PreloaderEl = css.div`
  display: inline-block;
  line-height: 0;
  height: 1em;
  & > div {
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;
    background-color: ${color.blueBlk};
    border-radius: ${radius.a};
    display: inline-block;
    height: 12px;
    margin-left: 2px;
    margin-right: 2px;
    width: 12px;
  }
  & > div:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  & > div:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

const Preloader = (props) => (
  <PreloaderEl {...props}>
    <div />
    <div />
    <div />
  </PreloaderEl>
);

Preloader.propTypes = {};

Preloader.defaultProps = {};

export default Preloader;
