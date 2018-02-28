import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";

import {
  Action,
  Actionbar,
  Animator,
  Bubble,
  BubbleGroup,
  Bubbles,
  Icon,
  Modal,
  ModalBody,
  ModalFoot,
  color
} from "interviewjs-styleguide";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        overlayClassName="ReactModal__HeroOverlay"
        role="dialog"
      >
        <Modal {...this.props} persistent transparent compact>
          <ModalBody>
            <BubbleGroup>
              <Bubbles persona="interviewee">
                <Bubble
                  animate
                  persona="interviewee"
                  theme={{ backg: color.flareLLt, color: color.white }}
                >
                  Welcome to InterviewJS
                </Bubble>
                <Bubble
                  animate
                  delay={1000}
                  persona="interviewee"
                  theme={{ backg: color.flareLLt, color: color.white }}
                >
                  An app that allows to compose scripted chats for a more
                  immersive storytelling experience.
                </Bubble>
                <Bubble
                  animate
                  delay={2000}
                  persona="interviewee"
                  theme={{ backg: color.flareLLt, color: color.white }}
                >
                  To continue, sign in with your Google Account.
                </Bubble>
              </Bubbles>
            </BubbleGroup>
          </ModalBody>
          <ModalFoot>
            <Animator delay={3000}>
              <Actionbar>
                <Action
                  fixed
                  secondary
                  onClick={this.props.handleAuthentication}
                >
                  <Icon name="google" />&nbsp;Sign in
                </Action>
              </Actionbar>
            </Animator>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

AuthModal.propTypes = {
  handleAuthentication: func.isRequired,
  handleClose: func,
  isOpen: bool
};

AuthModal.defaultProps = {
  handleClose: null,
  isOpen: true
};

AuthModal.defaultProps = {};
