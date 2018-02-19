import css from "styled-components";
import React from "react";
import { array, bool, func, node, oneOfType, string } from "prop-types";

import { ModalClose } from "../../components";
import { breakpoint, color, font, radius, setSpace } from "../../../utils";

require("./modals.css");

const ModalEl = css.div`
  background: ${color.white};
  box-shadow: 0 0 6px 2px ${color.shadowWt};
  color: ${color.greyBlk};
  font-family: ${font.serif};
  left: 50%;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  ${breakpoint.onlyphone} {
    max-height: 100%;
    min-height: 100%;
    width: 100%;
  }
  ${breakpoint.tablet} {
    border-radius: ${({ wizard }) => (wizard ? `` : radius.h)};
    max-height: calc(100% - 80px);
    max-width: ${({ wizard }) => (wizard ? `` : `600px`)};
  }
  & > button {
    ${setSpace("mrm")};
    ${setSpace("mtm")};
    position: absolute;
    right: 0;
    top: 0;
  }
  ${({ wizard }) =>
    wizard
      ? `
  max-height: 100%;
  min-height: 100%;
  width: 100%;
  `
      : ``};
`;

const ModalContent = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Modal = (props) => (
  <ModalEl {...props}>
    {!props.persistent ? <ModalClose onClick={props.handleClose} /> : null}
    <ModalContent>{props.children}</ModalContent>
  </ModalEl>
);

Modal.propTypes = {
  children: oneOfType([array, string, node]).isRequired,
  handleClose: func,
  height: string,
  persistent: bool,
  width: string
};

Modal.defaultProps = {
  handleClose: null,
  height: null,
  persistent: false,
  width: null
};

export default Modal;
