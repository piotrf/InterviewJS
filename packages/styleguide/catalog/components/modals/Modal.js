import css from "styled-components";
import React from "react";
import { array, bool, func, node, oneOfType, string } from "prop-types";

import { ModalClose } from "../../components";
import { color, font, radius, setSpace } from "../../../utils";

require("./modals.css");

const ModalEl = css.div`
  ${setSpace("pam")};
  background: ${color.white};
  border-radius: ${radius.h};
  box-shadow: 0 2px 4px ${color.greyLt};
  color: ${color.blueD};
  font-family: ${font.serif};
  height: ${props => (props.height ? `${props.height}` : `600px`)};
  position: relative;
  width: ${props => (props.width ? `${props.width}` : `600px`)};
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
  align-items: center;
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