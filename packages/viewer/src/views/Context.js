/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageParagraph,
  PageSubtitle,
  PageTitle,
  Separator,
  color,
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

const Aside = css(PageParagraph)`
  color: ${color.flareHD};
`;

export default class ContextView extends Component {
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
          </Cover>
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <PageSubtitle typo="h4">{story.context}</PageSubtitle>
            <Separator size="m" silent />
            <Aside typo="p3">
              The more people you interview the more information you gather. In
              the end you’ll get feedback on how well you’ve done.
            </Aside>
          </Container>
        </PageBody>
        <PageFoot limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Actionbar>
            <Action
              fixed
              onClick={() => this.props.router.push(`/interviewees`)}
              primary
            >
              Meet your interviewees
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    );
  }
}

ContextView.propTypes = {
  story: shape({
    title: string.isRequired
  })
};

ContextView.defaultProps = {
  story: {}
};
