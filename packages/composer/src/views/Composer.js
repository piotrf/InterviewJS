import React from "react";
import css from "styled-components";
import { arrayOf, func, object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  PageTitle,
  Separator,
  breakpoint,
  setSpace
} from "interviewjs-styleguide";

import { StoryDetailsModal, StoryMetaModal } from "../modals";

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
  constructor(props) {
    super(props);
    this.state = {
      metaModal: false,
      detailsModal: false,
      customiseModal: false
    };
    this.toggleCustomiseModal = this.toggleCustomiseModal.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.toggleMetaModal = this.toggleMetaModal.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }
  toggleMetaModal() {
    this.setState({ metaModal: !this.state.metaModal });
  }
  toggleCustomiseModal() {
    this.setState({ customiseModal: !this.state.customiseModal });
  }
  toggleDetailsModal() {
    this.setState({ detailsModal: !this.state.detailsModal });
  }
  updateStory(data) {
    const { storyId } = this.props.params;
    const i = this.props.stories.findIndex((story) => story.id === storyId);
    this.props.updateStory(data, i);
    this.setState({ detailsModal: false, metaModal: false });
  }
  render() {
    const { storyId } = this.props.params;
    const i = this.props.stories.findIndex((story) => story.id === storyId);
    const story = this.props.stories[i];
    return [
      <Page key="Page">
        <PageHead>
          <Container flex={[1, 1, `${100 / 3}%`]} padded>
            <Action onClick={() => this.props.router.push(`/`)}>
              <Icon name="chevron-left" size="x" /> Back
            </Action>
            <Separator dir="v" size="m" />
            <Action onClick={() => this.toggleMetaModal()}>
              <Icon name="info-circle" size="x" /> Edit Info
            </Action>
            <Separator dir="v" size="m" />
            <Action onClick={() => this.toggleDetailsModal()}>
              <Icon name="info-circle" size="x" /> Edit Details
            </Action>
            <Separator dir="v" size="s" silent />
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
          <Separator silent size="m" />
          <Actionbar>
            <Action primary fixed onClick={() => this.props.router.push(`/`)}>
              Go back
            </Action>
          </Actionbar>
        </Container>
      </MobilePage>,
      this.state.detailsModal ? (
        <StoryDetailsModal
          handleClose={this.toggleDetailsModal}
          isOpen={this.state.detailsModal}
          key="StoryDetailsModal"
          story={story}
          updateStory={this.updateStory}
        />
      ) : null,
      this.state.metaModal ? (
        <StoryMetaModal
          handleClose={this.toggleMetaModal}
          isOpen={this.state.metaModal}
          key="StoryMetaModal"
          story={story}
          updateStory={this.updateStory}
        />
      ) : null
    ];
  }
}

Composer.propTypes = {
  params: shape({ storyId: string.isRequired }).isRequired,
  stories: arrayOf(object),
  updateStory: func
};

Composer.defaultProps = {
  stories: [],
  updateStory: null
};
