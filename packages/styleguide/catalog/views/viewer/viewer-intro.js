import React from "react";
import css from "styled-components";

import { color } from "../../../utils";

import { Cover } from "../../partials";

import CoverImg from "../../static/cover.jpg";

export const Layout = css.div`
  background-color: ${color.black};
  display: flex;
  flex-direction: column;
`;

export const IntroHead = css(Cover)`
  flex: 1 0 50%;
`;

export const IntroBody = css.div`
  display: flex;
  flex: 2 0 0%;
  overflow-y: auto;
`;

export const IntroFoot = css.div`
  flex: 0 0 80px;
`;

export default class ViewerIntro extends React.Component {
  constructor() {
    super();
    this.state = { pageHeight: null };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    /*
      don’t do this, this is just for documentation purpouse
      as responsive Catalog specimens are wrapped in iframes:
    */
    const windowHeight = document.getElementsByTagName("iframe")[0]
      .contentWindow.document.body.clientHeight; // see comment above
    return this.setState({
      pageHeight: windowHeight
    });
  }
  render() {
    return (
      <Layout
        {...this.props}
        pageHeight={this.state.pageHeight}
        style={{
          minHeight: this.state.pageHeight
        }}
      >
        <IntroHead image={CoverImg}>Head</IntroHead>
        <IntroBody>Body</IntroBody>
        <IntroFoot>Foot</IntroFoot>
      </Layout>
    );
  }
}

