import css from "styled-components";
import React from "react";
import ReactModal from "react-modal";
import { bool, func, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Icon,
  Modal,
  PageSubtitle,
  PageTitle,
  Separator,
  Text,
  TextBlock,
  color,
  setSpace
} from "interviewjs-styleguide";

import { Cover, PageBody, PageHead } from "../partials";

const ModalBody = css(Container)`
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ModalHead = css(Container)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 500;
`;

const ModalCopy = css(Container)`
  ${setSpace("mbm")};
  color: ${color.greyBlk};
  &,
  & > * {
    text-align: left;
  }
  p {
    color: ${color.white};
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
        <Modal wizard persistent>
          <ModalBody cover>
            <ModalHead limit="m" padded>
              <Actionbar satellite="right">
                <Action inverted iconic onClick={this.props.handleClose}>
                  <Icon name="cross" />
                </Action>
              </Actionbar>
            </ModalHead>
            <PageHead flex={[0, 1, `${100 / 2}%`]}>
              <Cover image={story.cover} compact />
            </PageHead>
            <PageBody limit="m" flex={[1, 0, `${100 / 2}%`]}>
              <Container limit="x">
                <PageSubtitle typo="h3">Credits</PageSubtitle>
                <Separator silent size="m" />
                <ModalCopy>
                  {story.title ? (
                    <TextBlock>
                      <h3>Full title</h3>
                      <p>{story.title}</p>
                      <br />
                    </TextBlock>
                  ) : null}
                  {story.author ? (
                    <TextBlock>
                      <h3>Author</h3>
                      <p>{story.author}</p>
                      <br />
                    </TextBlock>
                  ) : null}
                  {story.authorLink ? (
                    <TextBlock>
                      <h3>Author link</h3>
                      <p>
                        <a
                          href={story.authorLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {story.authorLink}
                        </a>
                      </p>
                      <br />
                    </TextBlock>
                  ) : null}
                  {story.pubDate ? (
                    <TextBlock>
                      <h3>Published</h3>
                      <p>{story.pubDate}</p>
                      <br />
                    </TextBlock>
                  ) : null}
                </ModalCopy>
                <Separator silent size="m" />
                <PageSubtitle typo="h5">About InterviewJS</PageSubtitle>
                <Separator silent size="m" />
                <ModalCopy>
                  <TextBlock>
                    <p>
                      Turn interview transcripts to shareable and embeddable
                      interactive chats—InterviewJS is an open-source Google DNI
                      & Al Jazeera-backed app for journalists and newsrooms that
                      allows to compose and manage scripted chats for a more
                      immersive storytelling experience.
                    </p>
                    <br />
                    <h3>Product lead</h3>
                    <p>
                      Juliana Ruhfus, Ali Rae, Mohammed El-Haddad, Alaa Batayneh
                    </p>
                    <br />
                    <h3>Design & Development</h3>
                    <p>
                      <a
                        href="https://piotrf.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Piotr Fedorczyk
                      </a>
                    </p>
                    <br />
                    <h3>Infrastructure</h3>
                    <p>Laurian Gridinoc</p>
                    <br />
                  </TextBlock>
                </ModalCopy>
              </Container>
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
