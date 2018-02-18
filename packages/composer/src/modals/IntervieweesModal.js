import React from "react";
import ReactModal from "react-modal";
import { arrayOf, bool, func, number, object } from "prop-types";

import {
  Container,
  Modal,
  ModalBody,
  ModalHead,
  PageTitle
} from "interviewjs-styleguide";

import { Interviewees } from "../partials";

export default class IntervieweesModal extends React.Component {
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
        <Modal {...this.props}>
          <ModalHead>
            <PageTitle typo="h2">Edit Interviewees</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center">
              <Interviewees
                {...this.props}
                handleSubmit={this.props.handleClose}
                interviewees={this.props.interviewees}
                storyIndex={this.props.storyIndex}
              />
            </Container>
          </ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

IntervieweesModal.propTypes = {
  handleClose: func.isRequired,
  interviewees: arrayOf(object),
  isOpen: bool.isRequired,
  storyIndex: number.isRequired
};

IntervieweesModal.defaultProps = {
  interviewees: []
};
