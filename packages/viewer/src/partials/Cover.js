import React from "react";
import styled from "styled-components";
import { array, bool, oneOfType, node, string } from "prop-types";

import { LogoWSymbolNegative, Container, breakpoint, color, setSpace } from "interviewjs-styleguide";

const CoverEl = styled(Container)`
  background-color: ${color.black};
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  color: ${color.white};
  text-align: center;
  text-shadow: 0 1px 4px ${color.shadowD};
  width: 100%;
`;

const CoverBody = styled.div`
  ${setSpace("phm")};
  ${setSpace("ptm")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ compact }) => (compact ? `${100 / 5}vh` : `${100 / 3}vh`)};
  position: relative;
  ${breakpoint.tablet} {
    min-height: ${({ compact }) => (compact ? `${100 / 4}vh` : `${100 / 2}vh`)};
  }
  ${({ hasImage }) =>
    hasImage
      ? `
      background-color: ${color.shadowLt};
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

  `
      : ``};
`;

const CoverSauce = styled.div`
  ${setSpace("mbm")};
  position: relative;
  z-index: 2;
`;

const Brandmark = styled.div`
  ${setSpace("mts")};
  ${setSpace("mbm")};
  line-height: 0;
  opacity: 0.8;
  img {
    height: 36px;
  }
  ${breakpoint.onlyphone} {
    ${setSpace("mtm")};
    ${setSpace("ptx")};
    img {
      height: 32px;
    }
  }
`;

const Cover = props => (
  <CoverEl {...props}>
    <CoverBody compact={props.compact} hasImage={props.image}>
      <Brandmark>
        <img src={LogoWSymbolNegative} alt="InterviewJS" />
      </Brandmark>
      <CoverSauce>{props.children}</CoverSauce>
    </CoverBody>
  </CoverEl>
);

Cover.propTypes = {
  children: oneOfType([array, string, node]),
  compact: bool,
  image: node.isRequired,
};

Cover.defaultProps = {
  children: null,
  compact: false,
};

export default Cover;
