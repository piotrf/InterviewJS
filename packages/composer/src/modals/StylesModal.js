import React from "react";
import ReactModal from "react-modal";
import { bool, func, object, shape, string } from "prop-types";

import {
  Container,
  Modal,
  ModalBody,
  ModalHead,
  PageTitle,
  Separator,
  Text
} from "interviewjs-styleguide";

import {} from "../forms";

export default class StylesModal extends React.Component {
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
            <Text typo="p2">Edit Styles</Text>
            <Separator silent size="x" />
            <PageTitle typo="h2">{this.props.story.title}</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center" />
          </ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

StylesModal.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  updateStory: func.isRequired,
  story: shape({
    title: string,
    intro: string,
    context: string,
    author: string,
    authorLink: string,
    media: object,
    pubDate: string
  }).isRequired
};

StylesModal.defaultProps = {};
