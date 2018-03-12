import { func, shape, string } from "prop-types";
import React, { Component } from "react";

import {
  BubbleHTMLWrapper,
  Form,
  FormItem,
  Label,
  Legend,
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
  render() {
    return (
      <PaneFrame
        {...this.props}
        draft={
          <div>
            <BubbleHTMLWrapper>
              <img src={this.state.draft.value} alt="InterviewJSInsert" />
            </BubbleHTMLWrapper>
          </div>
        }
        hasDraft={this.props.draft.value !== ""}
        side="left"
      >
        <Form>
          <FormItem>
            <Label>Upload image</Label>
            <TextInput
              text
              name="value"
              onChange={(e) => this.handleChange(e)}
              required
              type="file"
              accept="image/gif, image/jpeg, image/jpg, image/svg, image/gif, image/png"
            />
            <Legend tip="Select an image with extension of .png, .jpg, .jpeg, .svg or .gif">
              i
            </Legend>
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
