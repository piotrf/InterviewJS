import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Modal, ModalBody, ModalHead } from "../components";

export default () => markdown`

  Modals are meant to be rendered as children of ReactModal component.

  ${(
    <ReactSpecimen>
      <Modal>
        <ModalHead>I’m a head</ModalHead>
        <ModalBody>I’m a body</ModalBody>
      </Modal>
    </ReactSpecimen>
  )}

`;
