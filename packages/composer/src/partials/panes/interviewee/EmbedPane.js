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

export default class EmbedPane extends Component {
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
    this.setState({ draft: { ...this.state.draft, [name]: value } }, () => value.toLowerCase().startsWith("<iframe") &&
        value.toLowerCase().includes("src=") &&
        value.toLowerCase().endsWith("></iframe>")
        ? this.props.updateDraft(this.state.draft)
        : null);
  }
  render() {
    const { value } = this.state.draft;

    const renderDraft = () => {
      if (value.length > 0) {
        return value.toLowerCase().startsWith("<iframe") &&
          value.toLowerCase().includes("src=") &&
          value.toLowerCase().endsWith("></iframe>") ? (
          <BubbleHTMLWrapper type="embed">
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </BubbleHTMLWrapper>
        ) : (
          <BubbleHTMLWrapper>
            this is not an iframe, iframe code starts with {`<iframe`}, ends
            with {`></iframe>`} and requires {`src=`} attribute
          </BubbleHTMLWrapper>
        );
      }
      return null;
    };

    return (
      <PaneFrame
        {...this.props}
        draft={<div>{renderDraft()}</div>}
        hasDraft={this.props.draft.value !== ""}
        side="left"
      >
        <Separator size="x" silent />
        <FormItem>
          <Label>Embed URL</Label>
          <TextInput
            area
            name="value"
            onChange={(e) => this.handleChange(e)}
            placeholder="<iframe…"
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

EmbedPane.propTypes = {
  updateDraft: func.isRequired,
  draft: shape({
    value: string,
    title: string
  })
};

EmbedPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
