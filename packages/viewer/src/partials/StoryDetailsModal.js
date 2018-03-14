import css from "styled-components";
import React from "react";
import ReactModal from "react-modal";
import { bool, func, shape } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Modal,
  PageSubtitle,
  Separator,
  color,
  font,
  setSpace,
  setType
} from "interviewjs-styleguide";

import { Cover, PageBody, PageHead } from "../partials";

const ModalBody = css(Container)`
  ${setSpace("pbh")};
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ModalHead = css(Container)`
  ${setSpace("mvs")};
  ${setSpace("pax")};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 500;
`;

const DetailsCopy = css.div`
  ${setType("s")};
  text-align: left;
  font-family: ${font.serif};
  h2 {
    ${setType("m")};
    color: ${color.greyBlk};
  }
  h3 {
    ${setType("s")};
    font-weight: bold;
    color: ${color.greyBlk};
  }
  p {
    ${setSpace("mbm")};
    ${setType("s")};
  }
  dl {

  }
  dt {
    color: ${color.greyBlk};
    display: block;
  }
  dd {
    ${setSpace("mbm")};
    display: block;
  }
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default class StoryDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { story } = this.props;
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        role="dialog"
        style={{ overlay: { background: "none" } }}
      >
        <ModalHead limit="m" align="right">
          <Container limit="m" padded>
            <Action inverted iconic onClick={this.props.handleClose}>
              <Icon name="cross" />
            </Action>
          </Container>
        </ModalHead>
        <Modal wizard persistent>
          <ModalBody cover>
            <PageHead flex={[0, 1, `${100 / 2}%`]}>
              <Cover image={story.cover} compact />
            </PageHead>
            <PageBody limit="x" flex={[1, 0, `${100 / 2}%`]}>
              <PageSubtitle typo="h3">Credits</PageSubtitle>
              <Separator silent size="m" />
              <DetailsCopy>
                <dl>
                  {story.title
                    ? [<dt>Full title</dt>, <dd>{story.title}</dd>]
                    : null}
                  {story.author && story.authorLink
                    ? [
                        <dt>Author</dt>,
                        <dd>
                          <a
                            href={story.authorLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {story.author}
                          </a>
                        </dd>
                      ]
                    : null}
                  {!story.author && story.authorLink
                    ? [
                        <dt>Author link</dt>,
                        <dd>
                          <a
                            href={story.authorLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {story.authorLink}
                          </a>
                        </dd>
                      ]
                    : null}
                  {story.pubDate
                    ? [<dt>Published</dt>, <dd>{story.pubDate}</dd>]
                    : null}
                </dl>
              </DetailsCopy>
              <Separator silent size="m" />
              <PageSubtitle typo="h5">About InterviewJS</PageSubtitle>
              <Separator silent size="m" />
              <DetailsCopy>
                <p>
                  Turn interview transcripts to shareable and embeddable
                  interactive chats—InterviewJS is an open-source Google DNI &
                  Al Jazeera-backed app for journalists and newsrooms that
                  allows to compose and manage scripted chats for a more
                  immersive storytelling experience.
                </p>
                <dl>
                  <dt>Product lead</dt>
                  <dd>
                    Juliana Ruhfus, Ali Rae, Mohammed El-Haddad, Alaa Batayneh
                  </dd>
                  <dt>Design & Development</dt>
                  <dd>
                    <a
                      href="https://piotrf.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Piotr Fedorczyk
                    </a>
                  </dd>
                  <dt>Infrastructure</dt>
                  <dd>
                    <a
                      href="https://twitter.com/gridinoc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Laurian Gridinoc
                    </a>
                  </dd>
                  <dt>Brand Identity</dt>
                  <dd>Joanna Bogusz</dd>
                </dl>
              </DetailsCopy>
              <Separator silent size="m" />
              <PageSubtitle typo="h5">Connect with InterviewJS</PageSubtitle>
              <Separator silent size="m" />
              <DetailsCopy>
                <p>
                  InterviewJS is an open-source software happily accepting
                  stars, forks and PRs on Github and followers on Twitter:
                </p>
              </DetailsCopy>
              <Separator silent size="m" />
              <Actionbar>
                <Action
                  href="https://github.com/AJInteractive/InterviewJS"
                  target="_blank"
                  inverted
                  fixed
                >
                  <Icon name="github" /> Github
                </Action>
                <Action
                  href="https://twitter.com/interview_js"
                  target="_blank"
                  inverted
                  fixed
                >
                  <Icon name="twitter" /> Twitter
                </Action>
              </Actionbar>
            </PageBody>
          </ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

StoryDetailsModal.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  story: shape({}).isRequired
};

StoryDetailsModal.defaultProps = {};
