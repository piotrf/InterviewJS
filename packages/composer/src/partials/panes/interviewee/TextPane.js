import { array, func, node, oneOfType, string } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";

import { color, font, setSpace, setType } from "interviewjs-styleguide";
import PaneFrame from "../PaneFrame";

const SrcText = css.textarea`
  ${setType("x")};
  background: transparent;
  border: none;
  bottom: 0;
  color: ${color.blueBlk};
  font-family: ${font.serif};
  height: 100%;
  left: 0;
  position: absolute;
  resize: none;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const SrcPlaceholder = css.p`
  bottom: 0;
  color: ${color.greyBlk};
  display: flex;
  flex-direction: column;
  font-style: italic;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  vertical-align: middle;
  z-index: 1;
`;

const Preview = css.textarea`
  ${setSpace("pan")};
  ${setType("x")};
  background: none;
  border: none;
  color: ${color.blueBlk};
  font-family: ${font.serif};
  height: 100%;
  overflow-y: auto;
  resize: none;
  width: 100%;
`;

export default class TextPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview,
      srcText: this.props.srcText
    };

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onPreviewEdit = this.onPreviewEdit.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { preview, srcText } = nextProps;
    if (srcText !== this.props.srcText) {
      this.setState({ srcText });
    } else if (preview !== this.props.preview) {
      this.setState({ preview });
    }
    return null;
  }
  onBlur() {
    this.saveChanges();
  }
  onChange(e) {
    this.setState({ srcText: e.target.value });
  }
  onSelect(e) {
    const { currentTarget } = e;
    const { selectionStart, selectionEnd } = e.currentTarget;
    const sel = currentTarget.value.substring(selectionStart, selectionEnd);
    this.props.updatePreview(sel, "text");
  }
  onPreviewEdit(e) {
    const { value } = e.currentTarget;
    this.setState({ preview: value });
  }
  saveChanges() {
    const { srcText } = this.state;
    this.props.updateSrcText(srcText);
  }
  render() {
    return (
      <PaneFrame
        {...this.props}
        preview={
          <Preview onChange={this.onPreviewEdit} value={this.state.preview} />
        }
        side="left"
      >
        <SrcText
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSelect={this.onSelect}
          value={this.state.srcText}
        />
        {this.state.srcText.length === 0 ? (
          <SrcPlaceholder>
            Paste or type in your interview text here…
          </SrcPlaceholder>
        ) : null}
      </PaneFrame>
    );
  }
}

TextPane.propTypes = {
  preview: oneOfType([array, string, node]),
  srcText: string,
  updatePreview: func.isRequired,
  updateSrcText: func.isRequired
};

TextPane.defaultProps = {
  preview: "",
  srcText: ""
};
