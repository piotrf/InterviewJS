import React from "react";
import css from "styled-components";
import ReactModal from "react-modal";
import { arrayOf, object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Text,
  Separator,
  breakpoint,
  setSpace
} from "interviewjs-styleguide";

const PageTitle = Text.withComponent("h1");
const Page = css(Container)`
  display: none;
  ${breakpoint.tablet} {
    align-content: stretch;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
  }
`;
const PageHead = css(Container)`
  ${setSpace("pvs")};
  ${setSpace("phm")};
`;
const PageBody = css(Container)`
  ${setSpace("phm")};
  ${setSpace("pbm")};
  align-items: stretch;
  & > * {
    ${setSpace("mhs")};
  }
`;
const PagePlaceholder = css(Container)`
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
      <Page key="Page">
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
            <PageTitle typo="h2" unwrap>
              {story.title}
            </PageTitle>
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
      </Page>,
      <PagePlaceholder key="Placeholder">
        <Container>
          <Text typo="h2">This Page works only on desktop</Text>
          <Separator effect="silent" size="m" />
          <Actionbar>
            <Action primary fixed onClick={() => this.props.router.push(`/`)}>
              Go back
            </Action>
          </Actionbar>
        </Container>
      </PagePlaceholder>,
      <ReactModal
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
      </ReactModal>,
      <ReactModal
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
      </ReactModal>
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
