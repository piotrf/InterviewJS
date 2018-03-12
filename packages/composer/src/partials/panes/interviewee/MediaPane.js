import { func, shape, string } from "prop-types";
import React, { Component } from "react";

import {
  BubbleHTMLWrapper,
  FormItem,
  Label,
  Separator,
  TextInput
} from "interviewjs-styleguide";
import PaneFrame from "../PaneFrame";

export default class MediaPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: this.props.draft
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
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ draft: { ...this.state.draft, [name]: value } }, () =>
      this.props.updateDraft(this.state.draft)
    );
  }
  render() {
    const { value } = this.state.draft;
    return (
      <PaneFrame
        {...this.props}
        draft={
          <div>
            <BubbleHTMLWrapper type="embed">
              <div dangerouslySetInnerHTML={{ __html: value }} />
            </BubbleHTMLWrapper>
          </div>
        }
        hasDraft={this.props.draft.value !== ""}
        side="left"
      >
        <Separator size="x" silent />
        <FormItem>
          <Label>YouTube embed code</Label>
          <TextInput
            area
            name="value"
            onChange={(e) => this.handleChange(e)}
            placeholder={`<iframe src="https://www.youtube.com/embed/…`}
            required
            rows={10}
            type="url"
            value={this.state.draft.value}
          />
        </FormItem>
      </PaneFrame>
    );
  }
}

MediaPane.propTypes = {
  updateDraft: func.isRequired,
  draft: shape({
    value: string,
    title: string
  })
};

MediaPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
