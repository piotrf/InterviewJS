import React from "react";
import ReactModal from "react-modal";
import { arrayOf, bool, func, number, object, shape, string } from "prop-types";

import {
  Container,
  Modal,
  ModalBody,
  ModalHead,
  PageTitle,
  Separator,
  Text
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
            <Text typo="p2">Edit Interviewees</Text>
            <Separator silent size="x" />
            <PageTitle typo="h2">{this.props.story.title}</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center">
              <Interviewees
                {...this.props}
                handleSubmit={this.props.handleClose}
                interviewees={this.props.story.interviewees}
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
  story: shape({
    interviewees: arrayOf(object),
    title: string.isRequired
  }).isRequired,
  isOpen: bool.isRequired,
  storyIndex: number.isRequired
};

IntervieweesModal.defaultProps = {};
