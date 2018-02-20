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

import {
  DetailsModal,
  IntervieweePane,
  StoryPane,
  UserPane
} from "../partials";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: none;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
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
      detailsModal: "",
      currentInterviewee: 0
    };
    this.switchInterviewee = this.switchInterviewee.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }
  switchInterviewee(interviewee) {
    this.setState({ currentInterviewee: interviewee });
  }
  toggleModal(tab) {
    return tab
      ? this.setState({ detailsModal: tab })
      : this.setState({ detailsModal: "" });
  }
  updateStory(data) {
    const { storyId } = this.props.params;
    const i = this.props.stories.findIndex((story) => story.id === storyId);
    this.props.updateStory(data, i);
  }
  render() {
    const { storyId } = this.props.params;
    const storyIndex = this.props.stories.findIndex(
      (story) => story.id === storyId
    );
    const story = this.props.stories[storyIndex];
    return [
      <Page key="Page">
        <PageHead>
          <Container flex={[1, 1, `${100 / 3}%`]} padded>
            <Action onClick={() => this.props.router.push(`/`)}>
              <Icon name="chevron-left" size="x" /> Back
            </Action>
            <Separator dir="v" size="m" />
            <Action onClick={() => this.toggleModal("meta")}>
              <Icon name="info-circle" size="x" /> Details
            </Action>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="center">
            <PageTitle typo="h2">{story.title}</PageTitle>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
            <Action primary>Publish Story</Action>
          </Container>
        </PageHead>
        <PageBody>
          <Container flex={[1, 1, `${100 / 3}%`]}>
            <IntervieweePane {...this.props} story={story} />
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]}>
            <StoryPane
              {...this.props}
              currentInterviewee={this.state.currentInterviewee}
              story={story}
              switchInterviewee={this.switchInterviewee}
              toggleModal={() => this.toggleModal("interviewees")}
            />
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]}>
            <UserPane {...this.props} story={story} />
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
      this.state.detailsModal !== "" ? (
        <DetailsModal
          {...this.props}
          handleClose={() => this.toggleModal()}
          isOpen
          key="DetailsModal"
          story={story}
          storyIndex={storyIndex}
          tab={this.state.detailsModal}
          updateStory={this.updateStory}
        />
      ) : null
    ];
  }
}

Composer.propTypes = {
  params: shape({ storyId: string.isRequired }).isRequired,
  router: object.isRequired,
  stories: arrayOf(object),
  updateStory: func
};

Composer.defaultProps = {
  stories: [],
  updateStory: null
};
