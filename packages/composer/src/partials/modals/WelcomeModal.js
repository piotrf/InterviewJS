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
  Separator,
  PageParagraph
} from "interviewjs-styleguide";

import WelcomeImage from "../../assets/welcome-image.png";

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
        role="dialog"
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
                <Image src={WelcomeImage} alt="" />
              </Container>
            </Container>
          </ModalBody>
          <ModalFoot>
            <Container align="center" limit="m">
              <PageParagraph typo="p3">
                The InterviewJS platform works for long-form storytelling,
                features and investigations—stories with at least four different
                longform interviewees and ideally with opposing points of views.
              </PageParagraph>
              <Separator size="m" silent />
              <Actionbar>
                <Action fixed primary onClick={this.props.handleClose}>
                  Create your first story
                </Action>
              </Actionbar>
            </Container>
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
