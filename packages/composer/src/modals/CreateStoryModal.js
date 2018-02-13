import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";

import {
  Action,
  Actionbar,
  Breadcrumb,
  Breadcrumbs,
  Container,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageTitle,
  PageSubtitle,
  Separator
} from "interviewjs-styleguide";

import { StoryMetaForm } from "../forms";

const getStepState = (step, i) => {
  if (step === i) {
    return "active";
  } else if (step > i) {
    return "passed";
  }
  return null;
};

export default class CreateStoryModal extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0
    };
    this.handleStep0 = this.handleStep0.bind(this);
  }
  handleStep0(data) {
    this.props.handleCreateStory(data);
    this.setState({ step: this.state.step + 1 });
  }
  render() {
    const { step } = this.state;
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        key="CreateStoryModal"
        onRequestClose={this.props.handleClose}
      >
        <Modal handleClose={this.props.handleClose} wizard>
          <ModalHead>
            <PageTitle typo="h1">Create New Story</PageTitle>
            <Separator size="m" effect="silent" />
            <Breadcrumbs count={3}>
              <Breadcrumb
                onClick={step >= 0 ? () => console.log("s1") : null}
                state={getStepState(step, 0)}
              >
                Basic info
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 1 ? () => console.log("s2") : null}
                state={getStepState(step, 1)}
              >
                Intro
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 2 ? () => console.log("s3") : null}
                state={getStepState(step, 2)}
              >
                Interviewees
              </Breadcrumb>
            </Breadcrumbs>
          </ModalHead>
          <ModalBody>
            <Container limit align="center">
              <Separator size="m" effect="silent" />
              <PageSubtitle typo="h3">
                Start by adding a few details and meta info about your story.
                You can attach a cover photo and your organisation logo here
                too.
              </PageSubtitle>
              <Separator size="m" effect="silent" />
              <StoryMetaForm
                handleCancel={this.props.handleClose}
                handleSubmit={this.handleStep0}
              />
            </Container>
          </ModalBody>
          <ModalFoot />
        </Modal>
      </ReactModal>
    );
  }
}

CreateStoryModal.propTypes = {
  handleClose: func.isRequired,
  handleCreateStory: func.isRequired,
  isOpen: bool.isRequired
};
