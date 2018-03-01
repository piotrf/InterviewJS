import {} from "prop-types";
import { Editor, EditorState } from "draft-js";
import css from "styled-components";
import React from "react";

import { color, font, setSpace, setType } from "interviewjs-styleguide";

const DraftJs = css.div`
  height: 100%;
  position: relative;
  & .DraftEditor-root {
    ${setType("x")};
    font-family: ${font.serif};
    height: 100%;
  }
  & .DraftEditor-editorContainer {
    bottom: 0;
    left: 0;
    min-height: 100%;
    overflow-y: auto;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    color: ${color.blueBlk};

  }
  & .DraftEditor-editorContainer > div {
    min-height: 100%;
  }
  & .public-DraftEditorPlaceholder-root {
    ${setSpace("phm")};
    color: ${color.greyBlk};
    font-style: italic;
    left: 0;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

export default class SrcTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }
  render() {
    return (
      <DraftJs>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Enter your transcript here…"
        />
      </DraftJs>
    );
  }
}

SrcTextEditor.propTypes = {};

SrcTextEditor.defaultProps = {};
