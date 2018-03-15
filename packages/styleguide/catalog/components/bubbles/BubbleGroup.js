import { func } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";

const BubbleGroupEl = css.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

export default class BubbleGroup extends Component {
  componentDidMount() {
    return this.props.callback ? this.props.callback() : null;
  }
  render() {
    return <BubbleGroupEl {...this.props} />;
  }
}

BubbleGroup.propTypes = {
  callback: func
};

BubbleGroup.defaultProps = {
  callback: null
};
