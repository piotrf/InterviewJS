import { func, shape, string } from "prop-types";
import React, { Component } from "react";
import Dropzone from "react-dropzone";

import {
  BubbleHTMLWrapper,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";
import PaneFrame from "../PaneFrame";

export default class ImagePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ draft: { ...this.state.draft, [name]: value } }, () =>
      this.props.updateDraft(this.state.draft)
    );
  }

  handleFile(f) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      console.log(base64data);
      this.setState({ draft: { ...this.state.draft, value: base64data } }, () =>
        this.props.updateDraft(this.state.draft)
      );
    }
    reader.readAsDataURL(f[0]);
  }

  render() {
    return (
      <PaneFrame
        {...this.props}
        draft={
          <div>
            <BubbleHTMLWrapper>
              <img src={this.state.draft.value} alt={this.state.draft.title} />
              <p>{this.state.draft.title}</p>
            </BubbleHTMLWrapper>
          </div>
        }
        hasDraft={this.props.draft.value !== ""}
        side="left"
      >
        <Separator size="x" silent />
        <Form>
          <FormItem>
            <Label>Upload image</Label>
            <Dropzone
              accept="image/jpeg, image/jpg, image/svg, image/gif, image/png"
              ref={(node) => { this.dropzoneRef = node; }}
              onDrop={(accepted, rejected) => { this.handleFile(accepted) }}
              style={{display: 'none'}}>
              <p>Drop file here</p>
            </Dropzone>
            <button type="button" onClick={() => { this.dropzoneRef.open() }}>
              Open File Dialog
            </button>
            <Legend tip="Select an image with extension of .png, .jpg, .jpeg, .svg or .gif">
              i
            </Legend>
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Image caption</Label>
            <TextInput
              text
              name="title"
              onChange={(e) => this.handleChange(e)}
              required
              type="text"
            />
          </FormItem>
        </Form>
      </PaneFrame>
    );
  }
}

ImagePane.propTypes = {
  draft: shape({
    value: string,
    title: string
  }),
  updateDraft: func.isRequired
};

ImagePane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
