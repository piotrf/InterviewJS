import React from "react";
import css from "styled-components";
import { array, node, oneOfType, string } from "prop-types";

import {
  Action,
  Container,
  Icon,
  Separator,
  color,
  font,
  radius,
  setSpace,
  setType
} from "interviewjs-styleguide";

import ShapeLeft from "../../assets/ShapeAttachedLeft.svg";
import ShapeRight from "../../assets/ShapeAttachedRight.svg";

const Frame = css(Container)`
  display: ${({ active }) => (active ? "flex" : "none")};
  height: 100%;
  position: relative;
  width: 100%;
  & > div {
    width: 100%;
  }
`;

const PreviewHolder = css(Container)`
  ${setSpace("pam")}
  height: 100%;
  overflow-x: visible;
`;

const Preview = css(Container)`
  ${setSpace("pas")};
  ${setType("x")};
  border-radius: ${radius.l};
  border: 1px solid ${color.greyHL};
  bottom: 0;
  box-shadow: 0 1px 3px ${color.shadowWt};
  color: ${color.blueBlk};
  font-family: ${font.serif};
  height: 100%;
  left: 0;
  overflow-x: visible;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

const SubmitButton = css.span`
  background-position: left center;
  background-size: cover;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  & > button {
    height: 44px;
    line-height: 44px;
    width: 44px;
  }
  ${({ side }) =>
    side === "left"
      ? `
    background-image: url(${ShapeLeft});
    padding: 8px 8px 8px 5px;
    left: 100%;
    margin-left: -2px;
  `
      : `
    background-image: url(${ShapeRight});
    padding: 8px 5px 8px 8px;
    right: 100%;
    margin-right: -2px;
  `}

`;

const PaneFrame = (props) => (
  <Frame {...props} dir="column" padded>
    <Container flex={[1, 1, `auto`]}>{props.children}</Container>
    <Separator silent size="s" />
    <Container flex={[0, 0, `200px`]}>
      <PreviewHolder>
        <Preview fill="grey">{props.preview}</Preview>
        <SubmitButton side={props.side}>
          <Action iconic primary>
            <Icon name="plus" size="l" />
          </Action>
        </SubmitButton>
      </PreviewHolder>
    </Container>
  </Frame>
);

PaneFrame.propTypes = {
  children: oneOfType([array, string, node]).isRequired,
  preview: oneOfType([array, string, node]),
  side: string
};

PaneFrame.defaultProps = {
  preview: null,
  side: "left"
};

export default PaneFrame;
