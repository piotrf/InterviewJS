import { object, func } from "prop-types";

import css from "styled-components";
import React, { Component } from "react";
import Raven from "raven-js";

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

  handleAuthentication(user) {
    const data = {
      id: user.uid,
      name: user.displayName,
      username: user.email,
      avatar: user.photoURL,
    };

    Raven.setUserContext({
      id: user.uid,
      email: user.email,
    });

    this.props.signInUser(data);

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
        style={{
          maxWidth: "350px",
          minHeight: "350px"
        }}
      />
    ];
  }
}

AuthView.propTypes = {
  router: object.isRequired, /* eslint react/forbid-prop-types: 0 */
  signInUser: func.isRequired
};

AuthView.defaultProps = {
};
