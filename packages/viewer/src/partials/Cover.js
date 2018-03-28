import React from "react";
import css from "styled-components";
import { array, bool, oneOfType, node, string } from "prop-types";

import {
  LogoNegative,
  Container,
  breakpoint,
  color,
  setHeight,
  setSpace
} from "interviewjs-styleguide";

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
  ${setSpace("ptm")};
  background-color: ${color.shadowLt};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ compact }) => (compact ? `${100 / 5}vh` : `${100 / 3}vh`)};
  position: relative;
  ${breakpoint.tablet} {
    min-height: ${({ compact }) => (compact ? `${100 / 4}vh` : `${100 / 2}vh`)};
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
    z-index: 1;
  }
`;

const CoverSauce = css.div`
  ${setSpace("mbm")};
  position: relative;
  z-index: 2;
`;

const Brandmark = css.div`
  ${setSpace("mvm")};
  line-height: 0;
  opacity: .8;
  img {
    ${setHeight("x")}
  }
`;

const Cover = (props) => (
  <CoverEl {...props}>
    <CoverBody compact={props.compact}>
      <Brandmark>
        <img src={LogoNegative} alt="InterviewJS" />
      </Brandmark>
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
