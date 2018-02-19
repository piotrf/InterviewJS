import React from "react";
import css from "styled-components";
import { arrayOf, func, object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Dropdown,
  DropdownContent,
  Icon,
  PageTitle,
  Separator,
  breakpoint,
  setSpace
} from "interviewjs-styleguide";

import {
  StylesModal,
  IntervieweesModal,
  StoryDetailsModal,
  StoryMetaModal
} from "../modals";

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
      settingsDropdown: false,

      detailsModal: false,
      intervieweesModal: false,
      metaModal: false,
      stylesModal: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }
  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  toggleDropdown(dropdown) {
    this.setState({ [dropdown]: !this.state[dropdown] });
  }
  triggerModal(modal) {
    this.toggleModal(modal);
    this.toggleDropdown("settingsDropdown");
  }
  updateStory(data) {
    const { storyId } = this.props.params;
    const i = this.props.stories.findIndex((story) => story.id === storyId);
    this.props.updateStory(data, i);
    this.setState({ detailsModal: false, metaModal: false });
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
            <Dropdown
              onRequestClose={() => this.toggleDropdown("settingsDropdown")}
              open={this.state.settingsDropdown}
              html={
                <DropdownContent>
                  <ul>
                    <li>
                      <Action onClick={() => this.triggerModal("metaModal")}>
                        Meta
                      </Action>
                    </li>
                    <li>
                      <Action onClick={() => this.triggerModal("detailsModal")}>
                        Details
                      </Action>
                    </li>
                    <li>
                      <Action
                        onClick={() => this.triggerModal("intervieweesModal")}
                      >
                        Interviewees
                      </Action>
                    </li>
                    <li>
                      <Action onClick={() => this.triggerModal("stylesModal")}>
                        Styles
                      </Action>
                    </li>
                  </ul>
                </DropdownContent>
              }
            >
              <Action onClick={() => this.toggleDropdown("settingsDropdown")}>
                <Icon name="ellipsis" /> Settings
              </Action>
            </Dropdown>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="center">
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
          handleClose={() => this.toggleModal("detailsModal")}
          isOpen={this.state.detailsModal}
          key="DetailsModal"
          story={story}
          updateStory={this.updateStory}
        />
      ) : null,
      this.state.metaModal ? (
        <StoryMetaModal
          handleClose={() => this.toggleModal("metaModal")}
          isOpen={this.state.metaModal}
          key="MetaModal"
          story={story}
          updateStory={this.updateStory}
        />
      ) : null,
      this.state.intervieweesModal ? (
        <IntervieweesModal
          {...this.props}
          handleClose={() => this.toggleModal("intervieweesModal")}
          isOpen={this.state.intervieweesModal}
          key="IntervieweesModal"
          story={story}
          storyIndex={storyIndex}
        />
      ) : null,
      this.state.stylesModal ? (
        <StylesModal
          handleClose={() => this.toggleModal("stylesModal")}
          isOpen={this.state.stylesModal}
          key="StylesModal"
          story={story}
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
