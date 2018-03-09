import { func, shape, string } from "prop-types";
import React, { Component } from "react";

import {
  BubbleHTMLWrapper,
  Container,
  FormItem,
  Label,
  Separator,
  TextInput
} from "interviewjs-styleguide";
import PaneFrame from "../PaneFrame";

export default class LinkPane extends Component {
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
    const { value, title } = this.state.draft;
    return (
      <PaneFrame
        {...this.props}
        draft={
          <BubbleHTMLWrapper>
            <a href={value} target="_blank">
              {title || value}
            </a>
          </BubbleHTMLWrapper>
        }
        hasDraft={this.props.draft.value !== ""}
        side="left"
      >
        <Container>
          <Separator size="x" silent />
          <FormItem>
            <Label>Link URL</Label>
            <TextInput
              input
              name="value"
              onChange={(e) => this.handleChange(e)}
              placeholder="https://…, http://…, www.…, "
              required
              type="url"
              value={value}
            />
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Display text</Label>
            <TextInput
              input
              name="title"
              onChange={(e) => this.handleChange(e)}
              placeholder="My link"
              value={title}
            />
          </FormItem>
        </Container>
      </PaneFrame>
    );
  }
}

LinkPane.propTypes = {
  updateDraft: func.isRequired,
  draft: shape({
    value: string,
    title: string
  })
};

LinkPane.defaultProps = {
  draft: {
    value: "",
    title: ""
  }
};
