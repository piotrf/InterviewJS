import React from "react";
import css from "styled-components";
import { arrayOf, object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Modal,
  Text,
  Separator,
  breakpoint
} from "interviewjs-styleguide";

import { Page, PageBody, PageHead, PageTitle } from "../components";

const ComposerPage = css(Page)`
  display: none;
  ${breakpoint.tablet} {
    display: flex;
  }
`;

const MobileComposerPage = css(Container)`
  display: none;
  ${breakpoint.onlyphone} {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export default class Composer extends React.Component {
  constructor() {
    super();
    this.state = {
      showInfoModal: false,
      showCustomiseModal: false
    };
    this.toggleInfoModal = this.toggleInfoModal.bind(this);
    this.toggleCustomiseModal = this.toggleCustomiseModal.bind(this);
  }
  toggleInfoModal() {
    this.setState({ showInfoModal: !this.state.showInfoModal });
  }
  toggleCustomiseModal() {
    this.setState({ showCustomiseModal: !this.state.showCustomiseModal });
  }
  render() {
    const { storyId } = this.props.params;
    const i = this.props.stories.findIndex(story => story.id === storyId);
    const story = this.props.stories[i];
    return [
      <ComposerPage key="Page">
        <PageHead dir="row" flex={[0, 0, "60px"]}>
          <Container flex={[0, 1, `${100 / 3}%`]}>
            <Action onClick={() => this.props.router.push(`/`)}>
              <Icon name="chevron-left" size="x" /> Back
            </Action>
            <Separator dir="v" size="m" />
            <Action onClick={() => this.toggleInfoModal()}>
              <Icon name="info-circle" size="x" /> Edit Info
            </Action>
            <Separator dir="v" size="s" effect="silent" />
            <Action onClick={() => this.toggleCustomiseModal()}>
              <Icon name="palette" size="x" /> Customise
            </Action>
          </Container>
          <Container flex={[1, 0, `${100 / 3}%`]} align="center">
            <PageTitle typo="h2">{story.title}</PageTitle>
          </Container>
          <Container flex={[0, 1, `${100 / 3}%`]} align="right">
            <Action primary>Publish Story</Action>
          </Container>
        </PageHead>
        <PageBody dir="row" flex={[1, 1, "100%"]}>
          <Container
            fill="white"
            flex={[1, 1, `${100 / 3}%`]}
            padded
            rounded
            shift
          >
            Left
          </Container>
          <Container
            fill="white"
            flex={[1, 1, `${100 / 3}%`]}
            padded
            rounded
            shift
          >
            Center
          </Container>
          <Container
            fill="white"
            flex={[1, 1, `${100 / 3}%`]}
            padded
            rounded
            shift
          >
            Right
          </Container>
        </PageBody>
      </ComposerPage>,
      <MobileComposerPage key="Placeholder">
        <Container>
          <Text typo="h2">This Page works only on desktop</Text>
          <Separator effect="silent" size="m" />
          <Actionbar>
            <Action primary fixed onClick={() => this.props.router.push(`/`)}>
              Go back
            </Action>
          </Actionbar>
        </Container>
      </MobileComposerPage>,
      <Modal
        key="EditInfoModal"
        isOpen={this.state.showInfoModal}
        // onAfterOpen={handleAfterOpenFunc}
        onRequestClose={() => this.toggleInfoModal()}
        // style={{ overlay: {}, content: {} }}
        contentLabel="Edit info modal"
        portalClassName="ReactModalPortal"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        bodyOpenClassName="ReactModal__Body--open"
        ariaHideApp={false}
        shouldFocusAfterRender
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
        role="dialog"
        parentSelector={() => document.body}
        aria={{
          labelledby: "heading",
          describedby: "full_description"
        }}
      >
        Edit Info
      </Modal>,
      <Modal
        key="CustomiseModal"
        isOpen={this.state.showCustomiseModal}
        // onAfterOpen={handleAfterOpenFunc}
        onRequestClose={() => this.toggleCustomiseModal()}
        // style={{ overlay: {}, content: {} }}
        contentLabel="Customise modal"
        portalClassName="ReactModalPortal"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        bodyOpenClassName="ReactModal__Body--open"
        ariaHideApp={false}
        shouldFocusAfterRender
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
        role="dialog"
        parentSelector={() => document.body}
        aria={{
          labelledby: "heading",
          describedby: "full_description"
        }}
      >
        Customise
      </Modal>
    ];
  }
}

Composer.propTypes = {
  params: shape({ storyId: string.isRequired }).isRequired,
  stories: arrayOf(object)
};

Composer.defaultProps = {
  stories: []
};
