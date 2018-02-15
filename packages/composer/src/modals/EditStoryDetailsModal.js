import React from "react";
import ReactModal from "react-modal";
import { arrayOf, bool, func, object } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageTitle,
  Separator
} from "interviewjs-styleguide";

import { StoryDetailsForm, StoryMetaForm } from "../forms";

export default class EditStoryDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }
  render() {
    console.log(this.props);
    const { tab } = this.state;
    const getModalBody = () => {
      if (tab === "meta") {
        return (
          <Container limit="s" align="center">
            StoryMetaForm
          </Container>
        );
      } else if (tab === "details") {
        return (
          <Container limit="s" align="center">
            StoryDetailsForm
          </Container>
        );
      }
      return null;
    };
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        key="EditStoryDetailsModal"
        onRequestClose={this.props.handleClose}
      >
        <Modal {...this.props}>
          <ModalHead>
            <PageTitle typo="h1">Edit</PageTitle>
            <Separator size="s" effect="silent" />
          </ModalHead>
          <ModalBody>{getModalBody()}</ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action primary onClick={this.props.handleClose}>
                Done
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

EditStoryDetailsModal.propTypes = {
  handleClose: func.isRequired,
  updateStory: func.isRequired,
  isOpen: bool.isRequired
};

EditStoryDetailsModal.defaultProps = {};
