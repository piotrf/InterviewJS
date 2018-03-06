/* eslint react/forbid-prop-types: 0 */
import React, { Component } from "react";
import ReactModal from "react-modal";
import { arrayOf, bool, func, number, object } from "prop-types";

import {
  Actionbar,
  Action,
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

import { DetailsForm, MetaForm, Poll } from "../";

const getStepState = (step, i) => {
  if (step === i) {
    return "active";
  } else if (step > i) {
    return "passed";
  }
  return null;
};

export default class PublishStoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0 // TODO revert to 0
    };
    this.handleStep0 = this.handleStep0.bind(this);
    this.handleStep1 = this.handleStep1.bind(this);
    this.handleStep2 = this.handleStep2.bind(this);
    this.handleStep3 = this.handleStep3.bind(this);
  }
  handleStep0(data) {
    this.props.updateStory(data, this.props.storyIndex);
    this.setState({ step: this.state.step + 1 });
  }
  handleStep1(data) {
    this.props.updateStory(data, this.props.storyIndex);
    this.setState({ step: this.state.step + 1 });
  }
  handleStep2() {
    this.setState({ step: this.state.step + 1 });
  }
  handleStep3() {
    this.props.handleClose();
  }
  render() {
    const { step } = this.state;
    const getModalBody = () => {
      if (step === 0) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">Review your story details…</PageSubtitle>
            <Separator size="m" silent />
            <MetaForm
              handleSubmit={this.handleStep0}
              story={this.props.story}
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
              story={this.props.story}
            />
          </Container>
        );
      } else if (step === 2) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">
              Engage your readers. Ask them to have their say…
            </PageSubtitle>
            <Separator size="m" silent />
            <Poll
              {...this.props}
              cta="Publish Story"
              handleSubmit={this.handleStep2}
              story={this.props.story}
            />
          </Container>
        );
      } else if (step === 3) {
        return (
          <Container limit="s" align="center">
            <PageSubtitle typo="h3">Success.</PageSubtitle>
            <Separator size="m" silent />
            Grab the link and share on social
            <Separator size="m" silent />
            <Actionbar>
              <Action fixed primary onClick={this.handleStep3}>
                Close
              </Action>
              <Action
                fixed
                href={`http://interviewjs.io/viewer/${this.props.story.id}`} // TODO actual url
                secondary
                target="_blank"
              >
                Open your story
              </Action>
            </Actionbar>
          </Container>
        );
      }
      return null;
    };
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen} // TODO
        key="PublishStoryModal"
        onRequestClose={this.props.handleClose}
        role="dialog"
      >
        <Modal {...this.props} wizard>
          <ModalHead>
            <PageTitle typo="h1">Publish Story</PageTitle>
            <Separator size="s" silent />
            <Breadcrumbs count={4}>
              <Breadcrumb
                onClick={step >= 0 ? () => this.setState({ step: 0 }) : null}
                state={getStepState(step, 0)}
              >
                Review basic info
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 1 ? () => this.setState({ step: 1 }) : null}
                state={getStepState(step, 1)}
              >
                Review context
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 2 ? () => this.setState({ step: 2 }) : null}
                state={getStepState(step, 2)}
              >
                Add closing poll
              </Breadcrumb>
              <Breadcrumb
                onClick={step >= 3 ? () => this.setState({ step: 3 }) : null}
                state={getStepState(step, 3)}
              >
                Share your story
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

PublishStoryModal.propTypes = {
  createInterviewee: func.isRequired,
  createStory: func.isRequired,
  deleteInterviewee: func.isRequired,
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  router: object.isRequired,
  stories: arrayOf(object),
  storyIndex: number.isRequired,
  updateInterviewee: func.isRequired,
  updateStory: func.isRequired,
  story: object.isRequired
};

PublishStoryModal.defaultProps = {
  stories: []
};
