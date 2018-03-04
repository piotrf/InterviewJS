import React, { Component } from "react";
import css from "styled-components";
import { array, bool, func, node, oneOfType, string } from "prop-types";

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
    height: 100%;
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
    height: 45px;
    line-height: 45px;
    width: 45px;
  }
  ${({ side }) =>
    side === "left"
      ? `
    background-image: url(${ShapeLeft});
    padding: 11px 11px 11px 7px;
    left: 100%;
    margin-left: -2px;
  `
      : `
    background-image: url(${ShapeRight});
    padding: 11px 7px 11px 11px;
    right: 100%;
    margin-right: -2px;
  `}

`;

export default class PaneFrame extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("nextProps.preview: ", nextProps.preview);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps.preview: ", prevProps.preview);
  }
  render() {
    const { hasPreview } = this.props;
    return (
      <Frame {...this.props} dir="column" padded>
        <Container flex={[1, 1, `auto`]}>{this.props.children}</Container>
        <Separator silent size="s" />
        <Container flex={[0, 0, `200px`]}>
          <PreviewHolder>
            <Preview fill="grey">{this.props.preview}</Preview>
            <SubmitButton side={this.props.side}>
              <Action
                disabled={!hasPreview}
                iconic
                onClick={hasPreview ? this.props.addStorylineItem : null}
                primary
                tone="positive"
              >
                <Icon name="plus" size="l" />
              </Action>
            </SubmitButton>
          </PreviewHolder>
        </Container>
      </Frame>
    );
  }
}

PaneFrame.propTypes = {
  addStorylineItem: func.isRequired,
  children: oneOfType([array, string, node]).isRequired,
  hasPreview: bool,
  preview: oneOfType([array, string, node]),
  side: string
};

PaneFrame.defaultProps = {
  preview: null,
  hasPreview: false,
  side: "left"
};
