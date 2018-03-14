/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

import {
  Action,
  Actionbar,
  Container,
  PageParagraph,
  PageSubtitle,
  Separator,
  color,
  setSpace
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

const ShareButtons = css.div`
  text-align: center;
  & > * {
    ${setSpace("mhs")};
    cursor: pointer;
    display: inline-block;
  }
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
    const url = window.location.href.replace(/results/g, "");
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
          <PageSubtitle typo="h3">
            Have your friends join the conversation. Share this story to your
            network:
          </PageSubtitle>
          <Separator size="m" silent />
          <ShareButtons>
            <FacebookShareButton url={url} hashtag="interviewjs">
              <FacebookIcon size={44} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              hashtags={["interviewjs"]}
              title={story.title}
            >
              <TwitterIcon size={44} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={story.title}>
              <LinkedinIcon size={44} round />
            </LinkedinShareButton>
            <EmailShareButton
              url={url}
              subject={story.title}
              body={`You have to see this: ${url} #interviewjs`}
            >
              <EmailIcon size={44} round />
            </EmailShareButton>
          </ShareButtons>
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
