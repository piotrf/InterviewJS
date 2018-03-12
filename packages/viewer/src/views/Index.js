/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { arrayOf, func, object, shape, string } from "prop-types";

import {} from "interviewjs-styleguide";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Jello</div>;
  }
}

IndexView.propTypes = {
  createStory: func,
  deleteStory: func,
  router: object,
  firebase: object,
  stories: arrayOf(object),
  updateStory: func,
  user: shape({
    name: string,
    id: string,
    avatar: string
  })
};

IndexView.defaultProps = {
  createStory: null,
  deleteStory: null,
  router: null,
  firebase: null,
  stories: [],
  updateStory: null,
  user: {}
};
