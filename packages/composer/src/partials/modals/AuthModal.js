import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

import {
  Animator,
  Bubble,
  BubbleGroup,
  Bubbles,
  Modal,
  ModalBody,
  ModalFoot,
  color
} from "interviewjs-styleguide";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/signedIn',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    };
  }

  componentDidMount(limit = 10) {
    if (this.auth) {
      firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) this.props.handleAuthentication(user);
          }
      );
    } else if (limit > 0) {
      setTimeout(() => this.componentDidMount(limit - 1), 100);
    }
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
                  animated
                  persona="interviewee"
                  theme={{ backg: color.flareLLt, color: color.white }}
                >
                  Welcome to InterviewJS…
                </Bubble>
                <Bubble
                  animated
                  delay={1000}
                  persona="interviewee"
                  theme={{ backg: color.flareLLt, color: color.white }}
                >
                  …an app that allows to compose scripted chats for a more
                  immersive storytelling experience.
                </Bubble>
                <Bubble
                  animated
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
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} ref={(auth) => { this.auth = auth; }} />
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
