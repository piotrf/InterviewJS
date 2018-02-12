import css from "styled-components";
import React from "react";
import { array, bool, func, node, oneOfType, string } from "prop-types";

import { ModalClose } from "../../components";
import { breakpoint, color, font, radius, setSpace } from "../../../utils";

require("./modals.css");

const ModalEl = css.div`
  background: ${color.white};
  box-shadow: 0 2px 4px ${color.greyLt};
  color: ${color.blueD};
  font-family: ${font.serif};
  left: 50%;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  ${breakpoint.onlyphone} {
    max-height: 100%;
    min-height: 100%;
    width: 100%;
  }
  ${breakpoint.tablet} {
    border-radius: ${radius.h};
    max-height: calc(100% - 80px);
    max-width: 680px;
  }
  & > button {
    ${setSpace("mrm")};
    ${setSpace("mtm")};
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const ModalContent = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Modal = props => (
  <ModalEl {...props}>
    {!props.persistent ? <ModalClose onClick={props.handleClose} /> : null}
    <ModalContent>{props.children}</ModalContent>
  </ModalEl>
);

Modal.propTypes = {
  children: oneOfType([array, string, node]).isRequired,
  handleClose: func,
  persistent: bool
};

Modal.defaultProps = {
  handleClose: null,
  persistent: false
};

export default Modal;
