import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageTitle,
  Text
} from "interviewjs-styleguide";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        role="dialog"
      >
        <Modal {...this.props} persistent>
          <ModalHead>
            <PageTitle typo="h2">Welcome to InterviewJS</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center">
              <Text typo="p2">Log in with you Google Account</Text>
            </Container>
          </ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action fixed secondary href="http://interviewjs.io">
                Return home
              </Action>
              <Action fixed primary onClick={this.props.handleAuthentication}>
                <Icon name="google" /> Authenticate
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

AuthModal.propTypes = {
  handleAuthentication: func.isRequired,
  handleClose: func,
  isOpen: bool
};

AuthModal.defaultProps = {
  handleClose: null,
  isOpen: true
};

AuthModal.defaultProps = {};
