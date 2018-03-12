import React from "react";
import css from "styled-components";
import { array, bool, oneOfType, node, string } from "prop-types";

import { Container, color, setSpace } from "interviewjs-styleguide";

const CoverEl = css(Container)`
  background-color: ${color.black};
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  bottom: 0;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 100px;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 1px 4px ${color.shadowD};
  top: 0;
`;

const CoverBody = css.div`
  background-color: ${color.shadowM};
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: flex-end;
  position: relative;
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
  ${setSpace("mbl")};
  display: flex;
  flex-direction: column;
  flex: 1 0 100px;
  justify-content: flex-end;
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
