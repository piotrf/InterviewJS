import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Modal,
  Image,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageSubtitle,
  PageTitle,
  Separator
} from "interviewjs-styleguide";

export default class WelcomeModal extends React.Component {
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
      >
        <Modal {...this.props} wizard>
          <ModalHead>
            <PageTitle typo="h1">Welcome to InterviewJS</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center" limit="m">
              <PageSubtitle typo="h3">
                InterviewJS allows you to present your interviews in form of a
                messenger-like app where the reader interacts directly with your
                interviewees. It puts people at the heart of the experience.
              </PageSubtitle>
              <Separator size="m" silent />
              <Container align="center" limit="s">
                <Image src="/assets/images/intro-image.png" alt="" />
              </Container>
            </Container>
          </ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action fixed primary onClick={this.props.handleClose}>
                Create your first story
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

WelcomeModal.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired
};

WelcomeModal.defaultProps = {};
