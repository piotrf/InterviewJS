/* eslint react/prefer-stateless-function: 0 */

import React, { Component, cloneElement } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Authenticator, withFederated } from "aws-amplify-react";

import * as actionCreators from "./actions/actionCreators";

const federated = {
  google_client_id: "106275763263-of8jnrgl86kvlgv62v1vfmkp7mu45v2u.apps.googleusercontent.com",
};

const mapStateToProps = (state) => ({
  stories: state.stories,
  user: state.user
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);


class App extends Component {
  render() {
    return (
      <Authenticator federated={federated}>
        {this.props.children}
      </Authenticator>
    );
  }
}

const Main = (props) => cloneElement(props.children, props);
export default connect(mapStateToProps, mapDispatchToProps)(Main); // Main
