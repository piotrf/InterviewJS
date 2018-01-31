import React from "react";
import css from "styled-components";
import {} from "prop-types";

import {} from "../../../utils";

export const Layout = css.div`
  background: yellow;
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  min-height: 100%;
`;

export const ViewHead = css.div`
  flex: 0 0 50px;
  background: cyan;
`;

export const ViewBody = css.div`
  background: magenta;
  display: flex;
  flex-direction: reverse-column;
  flex: 2 0 0%;
  overflow-y: auto;
`;

export const ViewFoot = css.div`
  flex: 0 0 80px;
  background: green;
`;

export default class ViewerChat extends React.Component {
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
        <ViewHead>Head</ViewHead>
        <ViewBody>Body</ViewBody>
        <ViewFoot>Foot</ViewFoot>
      </Layout>
    );
  }
}

ViewerChat.propTypes = {};

ViewerChat.defaultProps = {};
