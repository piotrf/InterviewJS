import { func, string } from "prop-types";
import { throttle } from "lodash";
import css from "styled-components";
import React from "react";

import { color, font, setType } from "interviewjs-styleguide";

const SrcTextArea = css.textarea`
  ${setType("x")};
  border: none;
  color: ${color.blueBlk};
  font-family: ${font.serif};
  height: 100%;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${color.greyBlk};
    font-style: italic;
    text-align: center;
    vertical-align: middle;
  }
`;

export default class SrcTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { srcText: this.props.srcText };

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  onChange(e) {
    this.setState({ srcText: e.target.value });
    throttle(this.saveChanges, 500);
  }
  onBlur() {
    this.saveChanges();
  }
  saveChanges() {
    const { srcText } = this.state;
    this.props.updateInterviewee(srcText);
  }
  render() {
    return (
      <SrcTextArea
        onBlur={this.onBlur}
        onChange={this.onChange}
        placeholder="Paste or type in your interview text here…"
        value={this.state.srcText}
      />
    );
  }
}

SrcTextEditor.propTypes = {
  updateInterviewee: func.isRequired,
  srcText: string
};

SrcTextEditor.defaultProps = {
  srcText: null
};

SrcTextEditor.defaultProps = {};
