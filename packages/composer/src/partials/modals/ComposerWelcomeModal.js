import styled from "styled-components";
import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";

import {
  Action,
  Actionbar,
  Icon,
  Container,
  Animator,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageSubtitle,
  PageTitle,
  Separator,
  color,
  radius,
  setSpace,
  setType
} from "interviewjs-styleguide";

const ModalBullets = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ModalBullet = styled(Container)`
  ${setSpace("mhs")};
  ${setSpace("pam")};
  ${setType("x")};
  border-radius: ${radius.m};
  color: ${color.blueBlk};
  flex: 1 1 ${100 / 3}%;
  line-height: 1.4em;
  text-align: center;
`;

const IconWrapper = styled.span`
  ${setSpace("mbs")};
  color: ${color.greyHD};
  display: block;
`;

export default class ComposerWelcomeModal extends React.Component {
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
        role="dialog"
      >
        <Modal {...this.props}>
          <ModalHead>
            <PageTitle typo="h2">
              Welcome to the InterviewJS chat dashboard
            </PageTitle>
            <Separator size="x" silent />
            <PageSubtitle typo="p2">
              Here’s where you convert interviews into messaging exchanges.
            </PageSubtitle>
          </ModalHead>
          <ModalBody>
            <ModalBullets>
              <ModalBullet>
                <Animator>
                  <IconWrapper>
                    <Icon size="l" name="question" />
                  </IconWrapper>{" "}
                  The{" "}
                  <strong style={{ fontWeight: "bold" }}>Help button</strong>{" "}
                  gives you a step by step guide.
                </Animator>
              </ModalBullet>
              <ModalBullet>
                <Animator delay={350}>
                  <IconWrapper>
                    <Icon size="l" name="info2" />
                  </IconWrapper>Remember to{" "}
                  <strong style={{ fontWeight: "bold" }}>
                    click “i” icons
                  </strong>{" "}
                  for extra info.
                </Animator>
              </ModalBullet>
              <ModalBullet>
                <Animator delay={700}>
                  <IconWrapper>
                    <Icon size="l" name="enlarge" />
                  </IconWrapper>{" "}
                  <strong style={{ fontWeight: "bold" }}>
                    Maximise your screen
                  </strong>{" "}
                  to see all options clearly.
                </Animator>
              </ModalBullet>
            </ModalBullets>
          </ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action fixed primary onClick={this.props.handleClose}>
                Got it
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

ComposerWelcomeModal.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired
};

ComposerWelcomeModal.defaultProps = {};
