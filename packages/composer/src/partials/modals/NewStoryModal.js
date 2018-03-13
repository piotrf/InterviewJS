/* eslint react/forbid-prop-types: 0 */
import React, { Component } from "react";
import ReactModal from "react-modal";
import { arrayOf, bool, func, object } from "prop-types";

import {
  Breadcrumb,
  Breadcrumbs,
  Container,
  Modal,
  ModalBody,
  ModalHead,
  PageTitle,
  PageSubtitle,
  Separator
} from "interviewjs-styleguide";

import { Interviewees, DetailsForm, MetaForm } from "../";

const getStepState = (step, i) => {
  if (step === i) {
    return "active";
  } else if (step > i) {
    return "passed";
  }
  return null;
};

export default class NewStoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      storyCreated: false
    };
    this.handleStep0 = this.handleStep0.bind(this);
    this.handleStep1 = this.handleStep1.bind(this);
    this.handleStep2 = this.handleStep2.bind(this);
  }
  handleStep0(data) {
    return (
      this.state.storyCreated
        ? this.props.updateStory(data, 0)
        : this.props.createStory(data),
      this.setState({ step: this.state.step + 1, storyCreated: true })
    );
  }
  handleStep1(data) {
    this.props.updateStory(data, 0);
    this.setState({ step: this.state.step + 1 });
  }
  handleStep2() {
    this.props.handleClose();
    this.props.router.push(`/my/stories/${this.props.stories[0].id}`);
  }
  render() {
    const { step } = this.state;
    const getModalBody = () => {
      if (step === 0) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">
              Start by adding a few details and meta info about your story. You
              can attach a cover photo and your organisation logo here too.
            </PageSubtitle>
            <Separator size="m" silent />
            <MetaForm
              handleSubmit={this.handleStep0}
              story={
                this.state.storyCreated ? this.props.stories[0] : undefined
              }
            />
          </Container>
        );
      } else if (step === 1) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">
              Give the readers a quest, tell them what they will learn about a
              topic when speaking to the interviewees.
            </PageSubtitle>
            <Separator size="m" silent />
            <DetailsForm
              handleSubmit={this.handleStep1}
              story={this.props.stories[0]}
            />
          </Container>
        );
      } else if (step === 2) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">
              Add interviewees for the user to chat to. You will be able to
              script separate chats for each interviewee later.
            </PageSubtitle>
            <Separator size="m" silent />
            <Interviewees
              createInterviewee={this.props.createInterviewee}
              cta="Compose your story"
              deleteInterviewee={this.props.deleteInterviewee}
              handleSubmit={this.handleStep2}
              interviewees={this.props.stories[0].interviewees}
              storyIndex={0}
              updateInterviewee={this.props.updateInterviewee}
            />
          </Container>
        );
      }
      return null;
    };
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        key="NewStoryModal"
        onRequestClose={this.props.handleClose}
        role="dialog"
      >
        <Modal {...this.props} wizard>
          <ModalHead>
            <PageTitle typo="h1">Create New Story</PageTitle>
            <Separator size="s" silent />
            <Breadcrumbs count={3}>
              <Breadcrumb
                onClick={step >= 0 ? () => this.setState({ step: 0 }) : null}
                state={getStepState(step, 0)}
              >
                Basic info
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 1 ? () => this.setState({ step: 1 }) : null}
                state={getStepState(step, 1)}
              >
                Intro
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 2 ? () => this.setState({ step: 2 }) : null}
                state={getStepState(step, 2)}
              >
                Interviewees
              </Breadcrumb>
            </Breadcrumbs>
          </ModalHead>
          <Separator size="s" silent />
          <ModalBody>{getModalBody()}</ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

NewStoryModal.propTypes = {
  createInterviewee: func.isRequired,
  createStory: func.isRequired,
  deleteInterviewee: func.isRequired,
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  router: object.isRequired,
  stories: arrayOf(object),
  updateInterviewee: func.isRequired,
  updateStory: func.isRequired
};

NewStoryModal.defaultProps = {
  stories: []
};
