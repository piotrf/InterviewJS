import React from "react";
import css from "styled-components";
import { array, bool, oneOfType, node, string } from "prop-types";

import { Container, breakpoint, color, setSpace } from "interviewjs-styleguide";

const CoverEl = css(Container)`
  background-color: ${color.black};
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  color: ${color.white};
  text-align: center;
  text-shadow: 0 1px 4px ${color.shadowD};
  width: 100%;
`;

const CoverBody = css.div`
  ${setSpace("phm")};
  ${setSpace("ptl")};
  background-color: ${color.shadowM};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: ${100 / 3}vh;
  position: relative;
  ${breakpoint.tablet} {
    min-height: ${100 / 2}vh;
  }
  &:after {
    height: 50%;
    background: linear-gradient(rgba(0,0,0,0), ${color.black});
    bottom: 0;
    content: " ";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 100;
  }
`;

const CoverSauce = css.div`
  ${setSpace("mbm")};
  position: relative;
  z-index: 200;
`;

const Cover = (props) => (
  <CoverEl {...props}>
    <CoverBody>
      <CoverSauce>{props.children}</CoverSauce>
    </CoverBody>
  </CoverEl>
);

Cover.propTypes = {
  children: oneOfType([array, string, node]),
  compact: bool,
  image: node.isRequired
};

Cover.defaultProps = {
  children: null,
  compact: false
};

export default Cover;
