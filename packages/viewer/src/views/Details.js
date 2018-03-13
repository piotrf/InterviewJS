/* eslint react/forbid-prop-types: 0 */
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageSubtitle,
  PageTitle,
  Separator
} from "interviewjs-styleguide";

import { Cover, Topbar, Page, PageBody, PageHead } from "../partials";

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { story } = this.props;
    return [
      <Topbar
        handleDetails={() => this.props.router.push(`/details`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover compact image={story.cover}>
            <PageTitle typo="h2">{story.title}</PageTitle>
          </Cover>
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <PageSubtitle typo="h3">{story.intro}</PageSubtitle>
          </Container>
          <Separator size="l" silent />
          <Actionbar>
            <Action
              fixed
              onClick={() => this.props.router.push(`/context`)}
              primary
            >
              Continue
            </Action>
          </Actionbar>
        </PageBody>
      </Page>
    ];
  }
}

DetailsView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

DetailsView.defaultProps = {
  router: null,
  story: {}
};
