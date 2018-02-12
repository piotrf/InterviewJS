import React from "react";
import css from "styled-components";
import ReactModal from "react-modal";
import { arrayOf, object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageTitle,
  Separator,
  breakpoint,
  setSpace
} from "interviewjs-styleguide";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: none;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  ${breakpoint.tablet} {
    display: flex;
  }
`;

const PageHead = css.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`;

const PageBody = css.div`
  ${setSpace("pbm")};
  ${setSpace("phm")};
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex: 0 1 100%;
  & > *:first-child {
    ${setSpace("mrs")};
  }
  & > *:nth-child(2) {
    ${setSpace("mhs")};
  }
  & > *:last-child {
    ${setSpace("mls")};
  }
`;

const MobilePage = css(Container)`
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
        <PageHead>
          <Container flex={[1, 1, `${100 / 3}%`]} padded>
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
          <Container flex={[1, 1, `${100 / 3}%`]} align="center" padded>
            <PageTitle typo="h2">{story.title}</PageTitle>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
            <Action primary>Publish Story</Action>
          </Container>
        </PageHead>
        <PageBody>
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
      <MobilePage key="Placeholder">
        <Container>
          <PageTitle typo="h2">This Page works only on desktop</PageTitle>
          <Separator effect="silent" size="m" />
          <Actionbar>
            <Action primary fixed onClick={() => this.props.router.push(`/`)}>
              Go back
            </Action>
          </Actionbar>
        </Container>
      </MobilePage>,
      <ReactModal
        // onAfterOpen={handleAfterOpenFunc}
        ariaHideApp={false}
        isOpen={this.state.showInfoModal}
        key="EditInfoModal"
        onRequestClose={() => this.toggleInfoModal()}
      >
        <Modal handleClose={() => this.toggleInfoModal()}>
          <ModalHead>
            <PageTitle typo="h1">Edit story details</PageTitle>
          </ModalHead>
          <ModalBody>Body</ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action fixed secondary onClick={() => this.toggleInfoModal()}>
                Cancel
              </Action>
              <Action fixed primary onClick={e => console.log("save")}>
                Save
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>,
      <ReactModal
        // onAfterOpen={handleAfterOpenFunc}
        ariaHideApp={false}
        isOpen={this.state.showCustomiseModal}
        key="CustomiseModal"
        onRequestClose={() => this.toggleCustomiseModal()}
      >
        <Modal handleClose={() => this.toggleCustomiseModal()}>
          <ModalHead>
            <PageTitle typo="h1">Customise</PageTitle>
          </ModalHead>
          <ModalBody>Body</ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action
                fixed
                secondary
                onClick={() => this.toggleCustomiseModal()}
              >
                Cancel
              </Action>
              <Action fixed primary onClick={e => console.log("save")}>
                Save
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
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
