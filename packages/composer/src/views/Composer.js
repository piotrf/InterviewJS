import React from "react";
import css from "styled-components";
import { arrayOf, func, object, shape, string } from "prop-types";
import Joyride from "react-joyride";

import {
  Action,
  Container,
  Icon,
  PageTitle,
  Separator,
  breakpoint,
  color,
  font,
  radius,
  setSpace
} from "interviewjs-styleguide";

import "./joyride.css";

import {
  DetailsModal,
  IntervieweePane,
  MobileRedirect,
  PublishStoryModal,
  StoryPane,
  UserPane,
  ErrorBoundary
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
  ${breakpoint.desktop} {
    display: flex;
  }
`;

const PageHead = css.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  ${PageTitle} {
    color: ${color.blueBlk};
  }
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

export default class ComposerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBubble: null,
      currentInterviewee: 0,
      detailsModal: "",
      joyrideSteps: [],
      publishModal: false
    };
    this.deleteInterviewee = this.deleteInterviewee.bind(this);
    this.initTour = this.initTour.bind(this);
    this.switchInterviewee = this.switchInterviewee.bind(this);
    this.toggleBubbleEdit = this.toggleBubbleEdit.bind(this);
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    this.togglePublishModal = this.togglePublishModal.bind(this);
    this.updateStory = this.updateStory.bind(this);
  }

  componentDidMount() {
    this.initTour();
  }

  initTour() {
    const joyrideStyles = {
      fontFamily: font.serif,
      backgroundColor: color.blueBlk,
      borderRadius: radius.l,
      color: color.white,
      mainColor: color.white,
      textAlign: "left",
      padding: 0,
      arrow: {},
      beacon: {
        inner: color.greenM,
        outer: color.greenM
      },
      header: {
        border: "none",
        fontFamily: font.serif,
        fontSize: "15px",
        fontWeight: "bold",
        lineHeight: "20px"
      },
      main: {
        color: color.greyLLt,
        fontFamily: font.serif,
        fontSize: "14px",
        lineHeight: "20px",
        margin: 0,
        padding: "7pxpx 0"
      },
      footer: {
        paddingTop: "3px"
      },
      button: {
        borderRadius: "100px",
        boxShadow: `0 1px 3px ${color.shadowM}`,
        color: color.blueM,
        fontFamily: font.serif,
        fontSize: "13px",
        padding: "7px 12px"
      },
      skip: {
        color: color.flareLD,
        fontFamily: font.serif,
        fontSize: "13px",
        padding: "7px 0",
        textDecoration: "underline"
      },
      back: {
        color: color.flareLD,
        fontFamily: font.serif,
        fontSize: "13px",
        padding: "7px 0",
        textDecoration: "underline"
      },
      close: {},
      hole: {}
    };
    const steps = [
      {
        title: "1. This is your storyline.",
        text:
          "The speech bubbles you create will appear here. Start adding some. Not sure how? Follow us on a quick tour…",
        selector: ".jr-step1",
        style: joyrideStyles,
        position: "left"
      },
      {
        title: "2. This panel is for your interviewees.",
        text:
          "Use it to store the transcript of your interview so you can use it as base for interviewee’s speech bubbles. Then start selecting pieces of text and hit the pretty big + button down below.",
        selector: ".jr-step2",
        style: joyrideStyles,
        position: "right"
      },
      {
        title:
          "3. Here’s the thing. The interviewee can respond not only with just text.",
        text:
          "You can also create chat bubbles with photos, videos, maps or sound.",
        selector: ".jr-step3",
        style: joyrideStyles,
        position: "bottom"
      },
      {
        title:
          "4. This is the panel for your end user, the reader of your story.",
        text:
          "You can use it to provide the reader of your story a choice, wether to continue in a story, or explore a topic.",
        selector: ".jr-step4",
        style: joyrideStyles,
        position: "left"
      },
      {
        title: "5. Continue actions",
        text:
          "Your reader needs to be able to move forward in the story at all times. Which is what `Contine` actions are for. Use them to invite the reader to interact with the interviewee. You can select from a dictionary of actions we’ve found useful in our stories, but you can also type your own. Continue action will let the user jump to the next speech bubble, simply go along with the story. That is unless an `explore` action is present next to it—then it’ll skip the closest next bubble…",
        selector: ".jr-step5",
        style: joyrideStyles,
        position: "left"
      },
      {
        title: "6. Explore actions",
        text:
          "You may also want to structure your interviews in a way to give the reader more context on a particular topic. That’s where `explore` actions come in handy. An `explore` action would open a short loop in your story where the reader is being presented with an extra speech bubble that then leads back to the main thread of your story. Example: Interviewee: “I witnessed it myself.” — User: “Carry on” (continue) or “Do you have a photo?” (explore)",
        selector: ".jr-step6",
        style: joyrideStyles,
        position: "left"
      },
      {
        title: "7. Edit your story details here.",
        text:
          "Care to make your story intro more appealing? Correct the title? Give your reader more context on the story or simpy edit your interviewees’ details? All here.",
        selector: ".jr-step7",
        style: joyrideStyles,
        position: "bottom"
      },
      {
        title: "8. Publish",
        text:
          "When you’re done creating your story, you can publish it here. Each time you publish it you get a new link to share the story with your network.",
        selector: ".jr-step8",
        style: joyrideStyles,
        position: "bottom"
      }
    ];
    this.setState({ joyrideSteps: steps });
    // setTimeout(() => this.setState({ joyrideSteps: steps }), 3000);
  }

  switchInterviewee(interviewee) {
    this.setState({ currentInterviewee: interviewee });
  }

  deleteInterviewee(story, interviewee) {
    this.setState({ currentInterviewee: 0 });
    this.props.deleteInterviewee(story, interviewee);
  }

  toggleDetailsModal(tab) {
    return tab
      ? this.setState({ detailsModal: tab })
      : this.setState({ detailsModal: "" });
  }

  togglePublishModal() {
    this.setState({ publishModal: !this.state.publishModal });
  }

  toggleBubbleEdit(target) {
    console.log("toggleBubbleEdit :", target);
    this.setState({ currentBubble: target });
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

    if (! story) {
      this.props.router.push(`/`);
      return null;
    }

    console.log("COMPOSER PROPS: ", this.props);

    return [
      <Page key="Page">
        <ErrorBoundary>
          <PageHead>
            <Container flex={[1, 1, `${100 / 3}%`]} padded>
              <Action onClick={() => this.props.router.push(`/stories`)}>
                <Icon name="arrow-left" size="x" /> Story overview
              </Action>
              <Separator dir="v" size="m" />
              <Action
                onClick={() => this.toggleDetailsModal("meta")}
                className="jr-step7"
              >
                <Icon
                  name="info2"
                  size="s"
                  style={{
                    position: "relative",
                    top: "1px",
                    marginRight: "2px"
                  }}
                />
                {` `}Story elements
              </Action>
            </Container>
            <Container flex={[1, 1, `${100 / 3}%`]} align="center">
              <PageTitle typo="h2">{story.title}</PageTitle>
            </Container>
            <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
              <Action
                primary
                onClick={this.togglePublishModal}
                className="jr-step8"
              >
                Publish Story
              </Action>
            </Container>
          </PageHead>
          <PageBody>
            <Container flex={[1, 1, `${100 / 3}%`]} className="jr-step2">
              <IntervieweePane
                {...this.props}
                currentBubble={this.state.currentBubble}
                currentInterviewee={this.state.currentInterviewee}
                story={story}
                storyIndex={storyIndex}
              />
            </Container>
            <Container flex={[0, 1, `400px`]} className="jr-step1">
              <StoryPane
                {...this.props}
                currentInterviewee={this.state.currentInterviewee}
                story={story}
                storyIndex={storyIndex}
                switchInterviewee={this.switchInterviewee}
                toggleBubbleEdit={this.toggleBubbleEdit}
                toggleDetailsModal={() =>
                  this.toggleDetailsModal("interviewees")
                }
              />
            </Container>
            <Container flex={[1, 1, `${100 / 3}%`]} className="jr-step4">
              <UserPane
                {...this.props}
                currentBubble={this.state.currentBubble}
                currentInterviewee={this.state.currentInterviewee}
                story={story}
                storyIndex={storyIndex}
              />
            </Container>
          </PageBody>
        </ErrorBoundary>
      </Page>,
      <MobileRedirect {...this.props} key="MobileRedirect" />,
      this.state.detailsModal !== "" ? (
        <DetailsModal
          {...this.props}
          deleteInterviewee={this.deleteInterviewee}
          handleClose={() => this.toggleDetailsModal()}
          isOpen
          key="DetailsModal"
          story={story}
          storyIndex={storyIndex}
          tab={this.state.detailsModal}
          updateStory={this.updateStory}
        />
      ) : null,
      this.state.publishModal ? (
        <PublishStoryModal
          {...this.props}
          handleClose={() => this.togglePublishModal()}
          isOpen
          key="PublishModal"
          story={story}
          user={this.props.user}
          storyIndex={storyIndex}
          tab={this.state.detailsModal}
          updateStory={this.updateStory}
        />
      ) : null,
      <Joyride
        ref="joyride" /* eslint react/no-string-refs: 0 */
        steps={this.state.joyrideSteps}
        autoStart
        showSkipButton
        showStepsProgress
        type="continuous"
        locale={{
          back: "Back",
          close: "Close",
          last: "Thanks!",
          next: "Next",
          skip: "Skip tour"
        }}
        holePadding={10}
        run // or some other boolean for when you want to start it
        // debug
        callback={this.callback}
      />
    ];
  }
}

ComposerView.propTypes = {
  deleteInterviewee: func,
  params: shape({ storyId: string.isRequired }).isRequired,
  router: object.isRequired /* eslint react/forbid-prop-types: 0 */,
  stories: arrayOf(object),
  user: object,
  updateStory: func
};

ComposerView.defaultProps = {
  deleteInterviewee: null,
  stories: [],
  user: {},
  updateStory: null
};
