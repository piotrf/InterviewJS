/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string, func } from "prop-types";

import {
  Action,
  Actionbar,
  Avatar,
  PageParagraph,
  PageSubtitle,
  PageTitle,
  Separator,
  Tip,
  color,
  radius,
  setHeight,
  setSpace
} from "interviewjs-styleguide";

import {
  Cover,
  Topbar,
  Page,
  PageBody,
  PageHead,
  StoryDetailsModal
} from "../partials";

const Interviewees = css.ul`
  text-align: center;
  ${({ offset }) =>
    offset
      ? `
  & li:first-child {
    transform: translateX(-15%);
  }
  `
      : ``};
`;

const Interviewee = css.li`
  display: inline-block;
  border: 2px solid ${color.black};
  border-radius: ${radius.a};
  margin-right: -.5em;
`;

const Logo = css.img`
  ${setHeight("l")};
  ${setSpace("mbm")};
  clear: both;
  display: inline-block;
`;

const Aside = css(PageParagraph)`
  color: ${color.flareHD};
`;

export default class IntroView extends Component {
  constructor(props) {
    super(props);
    this.state = { storyDetailsModal: false };
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
  }

  componentDidMount() {
    if (window.top !== window && window.addEventListener) {
      window.addEventListener("message", ({data, origin, source}) => {
        console.log(origin, data);
        if (data.interviewees) this.props.createStory(data);
      }, false);
    }
  }

  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }

  render() {
    const { story } = this.props;
    if (!story || Object.keys(story).length === 0) return null; // FIXME show spinner
    console.log(story);
    return [
      <Topbar handleDetails={this.toggleDetailsModal} key="topbar" />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover}>
            <PageTitle typo="h1">{story.title}</PageTitle>
            <Separator size="s" silent />
            <Aside typo="p6">Featuring:</Aside>
            <Separator size="s" silent />
            <Interviewees offset={story.interviewees.length > 1}>
              {story.interviewees.map((interviewee) => (
                <Tip title={interviewee.name} key={interviewee.id}>
                  <Interviewee>
                    <Avatar image={interviewee.avatar} size="l" />
                  </Interviewee>
                </Tip>
              ))}
            </Interviewees>
          </Cover>
        </PageHead>
        <PageBody limit="x" flex={[1, 0, `${100 / 4}%`]}>
          <PageSubtitle typo="h3">{story.intro}</PageSubtitle>
          <Separator size="m" silent />
          <Aside typo="p3">
            InterviewJS lets you chat to people at the heart of a story. Hear
            from them in their own words.
          </Aside>
          <Separator size="l" silent />
          {story.logo ? (
            <Logo src={story.logo} alt="Story author’s logo" />
          ) : null}
          <Aside typo="p6">
            {story.author ? <span>{story.author}</span> : null}
            {story.author && story.pubDate ? `, ` : null}
            {story.pubDate ? <span>{story.pubDate}</span> : null}
          </Aside>
          <Separator size="m" silent />
          <Actionbar>
            <Action
              fixed
              onClick={() => this.props.router.push(`/story/context`)}
              primary
            >
              Continue
            </Action>
          </Actionbar>
        </PageBody>
      </Page>,
      this.state.storyDetailsModal ? (
        <StoryDetailsModal
          handleClose={this.toggleDetailsModal}
          isOpen={this.state.storyDetailsModal}
          key="detailsModal"
          story={story}
        />
      ) : null
    ];
  }
}

IntroView.propTypes = {
  createStory: func.isRequired,
  router: object,
  story: shape({
    title: string
  })
};

IntroView.defaultProps = {
  router: null,
  story: {}
};
