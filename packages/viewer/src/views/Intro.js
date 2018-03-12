/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { arrayOf, func, object, shape, string } from "prop-types";

import {} from "interviewjs-styleguide";

export default class IntroView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Jello</div>;
  }
}

IntroView.propTypes = {};

IntroView.defaultProps = {};
