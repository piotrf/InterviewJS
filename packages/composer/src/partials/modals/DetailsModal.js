import React from "react";
import ReactModal from "react-modal";
import { bool, func, number, shape, string } from "prop-types";

import {
  Modal,
  ModalBody,
  ModalHead,
  PageTitle,
  PaneTab,
  PaneTabs,
  Separator
} from "interviewjs-styleguide";

import { Interviewees, DetailsForm, MetaForm } from "../";

export default class DetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: this.props.tab };
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(target) {
    this.setState({ tab: target });
  }
  render() {
    const { tab } = this.state;
    const getModalBody = () => {
      switch (tab) {
        case "details":
          return (
            <DetailsForm
              cta="Done"
              handleSave={this.props.updateStory}
              handleSubmit={this.props.handleClose}
              story={this.props.story}
            />
          );
        case "interviewees":
          return (
            <Interviewees
              createInterviewee={this.props.createInterviewee}
              cta="Done"
              deleteInterviewee={this.props.deleteInterviewee}
              handleSubmit={this.props.handleClose}
              interviewees={this.props.story.interviewees}
              storyIndex={this.props.storyIndex}
              updateInterviewee={this.props.updateInterviewee}
            />
          );
        case "styles":
          return <div>Styles</div>;
        case "meta":
        default:
          return (
            <MetaForm
              cta="Done"
              handleSave={this.props.updateStory}
              handleSubmit={this.props.handleClose}
              story={this.props.story}
            />
          );
      }
    };
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        role="dialog"
      >
        <Modal {...this.props}>
          <ModalHead fill="grey">
            <PageTitle typo="h2">{this.props.story.title}</PageTitle>
            <Separator size="s" silent />
            <PaneTabs>
              <PaneTab
                active={tab === "meta"}
                onClick={() => this.switchTab("meta")}
                opinionated
              >
                Meta
              </PaneTab>
              <PaneTab
                active={tab === "details"}
                onClick={() => this.switchTab("details")}
                opinionated
              >
                Details
              </PaneTab>
              <PaneTab
                active={tab === "interviewees"}
                onClick={() => this.switchTab("interviewees")}
                opinionated
              >
                Interviewees
              </PaneTab>
              {/* <PaneTab
                active={tab === "styles"}
                onClick={() => this.switchTab("styles")}
              >
                Styles
              </PaneTab> — TODO: enable custom styling */}
            </PaneTabs>
          </ModalHead>
          <Separator size="s" silent />
          <ModalBody>{getModalBody()}</ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

DetailsModal.propTypes = {
  createInterviewee: func.isRequired,
  deleteInterviewee: func.isRequired,
  handleClose: func.isRequired,
  isOpen: bool,
  story: shape({
    title: string.isRequired
  }).isRequired,
  storyIndex: number.isRequired,
  tab: string,
  updateInterviewee: func.isRequired,
  updateStory: func.isRequired
};

DetailsModal.defaultProps = {
  isOpen: false,
  tab: "meta"
};
