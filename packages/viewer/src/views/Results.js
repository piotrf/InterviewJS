/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageParagraph,
  PageSubtitle,
  Separator,
  color
} from "interviewjs-styleguide";

import {
  Cover,
  Page,
  PageBody,
  PageHead,
  StoryDetailsModal,
  Topbar
} from "../partials";

const Aside = css(PageParagraph)`
  color: ${color.flareHD};
`;

export default class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = { storyDetailsModal: false };
    this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
  }
  toggleDetailsModal() {
    this.setState({ storyDetailsModal: !this.state.storyDetailsModal });
  }
  render() {
    const { story } = this.props;
    return [
      <Topbar
        handleDetails={this.toggleDetailsModal}
        handleBack={() => this.props.router.push(`/poll`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} compact />
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <PageSubtitle typo="h4">Results</PageSubtitle>
            <Separator size="m" silent />
            <Aside typo="p3">Aside</Aside>
          </Container>
          <Separator size="l" silent />
          <Actionbar>
            <Action fixed onClick={console.log("share")} primary>
              Meet your interviewees
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

ResultsView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ResultsView.defaultProps = {
  router: null,
  story: {}
};
