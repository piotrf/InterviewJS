import React from "react";
import css from "styled-components";
import { array, node, oneOfType, string } from "prop-types";

import {
  Container,
  Separator,
  color,
  font,
  radius,
  setSpace,
  setType
} from "interviewjs-styleguide";

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
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

const PaneFrame = (props) => (
  <Frame {...props} dir="column" padded>
    <Container flex={[1, 1, `auto`]}>{props.children}</Container>
    <Separator silent size="s" />
    <Container flex={[0, 0, `200px`]}>
      <PreviewHolder>
        <Preview fill="grey">{props.preview}</Preview>
      </PreviewHolder>
    </Container>
  </Frame>
);

PaneFrame.propTypes = {
  children: oneOfType([array, string, node]).isRequired,
  preview: oneOfType([array, string, node])
};

PaneFrame.defaultProps = {
  preview: null
};

export default PaneFrame;
