/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  PageParagraph,
  PageSubtitle,
  PageTitle,
  Separator,
  Tip,
  color,
  radius,
  setHeight,
  setSpace,
  setType
} from "interviewjs-styleguide";

import { Cover } from "../partials";

const Page = css.div`
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = css(Container)`
  ${setSpace("pbl")};
  width: 100%;
  ${PageTitle} {
    ${setType("h")};
  }
`;

const PageBody = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
`;

const PageFoot = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
`;

const Interviewees = css.ul`
  text-align: center;
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
    this.state = {};
  }

  render() {
    const { story } = this.props;
    return (
      <Page>
        <PageHead limit="m" flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover}>
            <PageTitle typo="h1">{story.title}</PageTitle>
            <Separator size="s" silent />
            <Aside typo="p6">Featuring:</Aside>
            <Separator size="s" silent />
            <Interviewees>
              {story.interviewees.map((interviewee) => (
                <Tip title={interviewee.name} key={interviewee.name}>
                  <Interviewee>
                    <Avatar image={interviewee.avatar} />
                  </Interviewee>
                </Tip>
              ))}
            </Interviewees>
          </Cover>
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <PageSubtitle typo="h3">{story.intro}</PageSubtitle>
            <Separator size="m" silent />
            <Aside typo="p3">
              InterviewJS lets you chat to people at the heart of a story. Hear
              from them in their own words.
            </Aside>
          </Container>
        </PageBody>
        <PageFoot limit="m" flex={[1, 0, `${100 / 4}%`]}>
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
              onClick={() => this.props.router.push(`/context`)}
              primary
            >
              Continue
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    );
  }
}

IntroView.propTypes = {
  story: shape({
    title: string.isRequired
  })
};

IntroView.defaultProps = {
  story: {}
};
