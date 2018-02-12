import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Modal, ModalBody, ModalFoot, ModalHead } from "../components";

export default () => markdown`

  Modals are meant to be rendered as children of ReactModal component.

  ## Modals with default size

  ${(
    <ReactSpecimen responsive>
      <Modal handleClose={e => console.log(e)}>
        <ModalHead>I’m a head</ModalHead>
        <ModalBody>I’m a body</ModalBody>
        <ModalFoot>I’m a foot</ModalFoot>
      </Modal>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen responsive>
      <Modal persistent>
        <ModalHead>I’m a head</ModalHead>
        <ModalBody>I’m a body</ModalBody>
        <ModalFoot>I’m a foot</ModalFoot>
      </Modal>
    </ReactSpecimen>
  )}

  ## Modals with custom size

  ${(
    <ReactSpecimen responsive>
      <Modal height="300px" width="300px">
        <ModalHead>I’m a head</ModalHead>
        <ModalBody>I’m a body</ModalBody>
        <ModalFoot>I’m a foot</ModalFoot>
      </Modal>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen responsive>
      <Modal height="100%" width="100%">
        <ModalHead>I’m a head</ModalHead>
        <ModalBody>I’m a body</ModalBody>
        <ModalFoot>I’m a foot</ModalFoot>
      </Modal>
    </ReactSpecimen>
  )}

`;
