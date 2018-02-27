/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";

import { AuthModal } from "../partials";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;

export default class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  handleAuthentication() {
    this.props.router.push(`/my/stories`);
  }
  render() {
    return [
      <Page key="Page" />,
      <AuthModal
        {...this.props}
        handleAuthentication={this.handleAuthentication}
        isOpen
        key="AuthModal"
        style={{ width: "400px" }}
      />
    ];
  }
}

AuthView.propTypes = {};

AuthView.defaultProps = {};
