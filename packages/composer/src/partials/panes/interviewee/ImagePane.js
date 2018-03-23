import { func, shape, string } from "prop-types";
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Pica from "pica";

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
      draft: this.props.draft,
      type: "image/*",
      size: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { draft } = nextProps;
    if (draft !== this.props.draft) {
      this.setState({ draft });
    }
    return null;
  }

  onLoad() {
    const targetWidth = this.img.width > 600 ? 600 : this.img.width;
    const targetHeight = parseInt(targetWidth * this.img.height / this.img.width);
    console.log(`${this.img.width} x ${this.img.height} => ${targetWidth} x ${targetHeight}`);
    const offScreenCanvas = document.createElement('canvas');
    offScreenCanvas.width  = targetWidth;
    offScreenCanvas.height = targetHeight;

    const pica = Pica({ features: ['js', 'wasm', 'ww'] });
    pica.resize(this.img, offScreenCanvas, {
      unsharpAmount: 80,
      unsharpRadius: 0.6,
      unsharpThreshold: 2,
      transferable: true
    }).then(result => pica.toBlob(result, 'image/jpeg', 0.90))
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result.length > 3e6 ? '' : reader.result;
          console.log("data url length", base64data.length);
          this.setState({ draft: { ...this.state.draft, value: base64data } }, () =>
            this.props.updateDraft(this.state.draft)
          );
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => console.log(error));
  }

  handleFile(f) {
    const { type, size, preview } = f[0];
    this.img.src = preview;
    this.setState({ type, size });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ draft: { ...this.state.draft, [name]: value } }, () =>
      this.props.updateDraft(this.state.draft)
    );
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
            <div style={{position: 'absolute', bottom: 0, left: 0, overflow: 'hidden', pointerEvents: 'none'}}>
              <img ref={img => {this.img = img;}} onLoad={() => this.onLoad()} alt="original" src="http://via.placeholder.com/350x150" />
            </div>
            <Dropzone
              accept="image/jpeg, image/jpg, image/svg, image/gif, image/png"
              ref={(node) => {
                this.dropzoneRef = node;
              }}
              onDrop={(accepted) => {
                this.handleFile(accepted);
              }}
              style={{ display: "none" }}
            >
              <p>Drop file here</p>
            </Dropzone>
            <TextInput
              file
              onClick={() => {
                this.dropzoneRef.open();
              }}
            />
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
