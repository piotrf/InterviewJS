import React from "react";
import ReactModal from "react-modal";
import { bool, func, node, object, oneOfType, shape, string } from "prop-types";

import {
  Container,
  Modal,
  ModalBody,
  ModalHead,
  PageTitle
} from "interviewjs-styleguide";

import { StoryMetaForm } from "../forms";

export default class EditStoryDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        key="EditStoryDetailsModal"
        onRequestClose={this.props.handleClose}
      >
        <Modal {...this.props}>
          <ModalHead>
            <PageTitle typo="h2">Meta information</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center">
              <StoryMetaForm
                handleSubmit={this.props.updateStory}
                story={this.props.story}
              />
            </Container>
          </ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

EditStoryDetailsModal.propTypes = {
  handleClose: func.isRequired,
  updateStory: func.isRequired,
  isOpen: bool.isRequired,
  story: shape({
    title: string,
    intro: string,
    context: string,
    author: string,
    authorLink: string,
    media: {
      cover: oneOfType([string, object, node]),
      logo: oneOfType([string, object, node])
    },
    pubDate: string
  }).isRequired
};

EditStoryDetailsModal.defaultProps = {};
