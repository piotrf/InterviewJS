import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { setHeight } from "../../../utils";

export const Layout = css.div`
  background: yellow;
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  min-height: 100%;
`;

export const ViewHead = css.div`
  ${setHeight("l")};
`;

export const ViewBody = css.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row-reverse;
`;

export const ViewFoot = css.div`
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
        <ViewHead>Head</ViewHead>
        <ViewBody>
          Body
          <ViewFoot>Foot</ViewFoot>
        </ViewBody>
      </Layout>
    );
  }
}

ViewerIntro.propTypes = {};

ViewerIntro.defaultProps = {};
