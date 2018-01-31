import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { Cover } from "../../partials";

import { color } from "../../../utils";

import CoverImg from "../../static/cover.jpg";

export const Layout = css.div`
  background: ${color.black};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
`;

export const ViewHead = css(Cover)`
  flex: 0 0 50%;
`;

export const ViewBody = css.div`
  display: flex;
  flex-direction: reverse-column;
  flex: 2 0 0%;
  overflow-y: auto;
`;

export const ViewFoot = css.div`
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
        <ViewHead image={CoverImg}>Head</ViewHead>
        <ViewBody>Body</ViewBody>
        <ViewFoot>Foot</ViewFoot>
      </Layout>
    );
  }
}

ViewerIntro.propTypes = {};

ViewerIntro.defaultProps = {};
