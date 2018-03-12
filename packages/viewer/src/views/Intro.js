/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import {} from "prop-types";

import { Container, color } from "interviewjs-styleguide";

import { Cover } from "../partials";

const Page = css.div`
  background: ${color.black};
  color: ${color.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const PageCover = css(Container)`

`;

const PageBody = css(Container)`

`;

const PageFoot = css(Container)`

`;

export default class IntroView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    return <Page>Hey story!</Page>;
  }
}

IntroView.propTypes = {};

IntroView.defaultProps = {};
