import css from "styled-components";
import React from "react";
import { bool, string } from "prop-types";

import { color, radius, setSpace, styleText, time } from "../../../utils";

const Input = css.input`
  ${setSpace("phs")};
  ${setSpace("pvm")};
  ${styleText.input.value};
  border-radius: ${radius.m};
  border: 1px solid ${color.greyLt};
  color: ${color.blueBlk};
  position: relative;
  transition: border-color ${time.m};
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${color.blueM};
    z-index: 50;
  }
  &::placeholder {
    ${styleText.input.placeholder};
    color: ${color.greyLLt};
  }
  ${({ area }) =>
    area
      ? `
    min-height: 100px;
  `
      : ``}
  ${({ place }) => {
    if (place === "left") {
      return `border-radius: ${radius.m} 0 0 ${radius.m}; left: 1px`;
    } else if (place === "right") {
      return `border-radius: 0 ${radius.m} ${radius.m} 0; right: 1px`;
    }
    if (place !== null) {
      return `border-radius: 0`;
    }
  }}
`;

const Textarea = Input.withComponent("textarea");

const TextInput = props =>
  props.area ? <Textarea {...props} /> : <Input {...props} />;

TextInput.propTypes = {
  area: bool,
  input: bool,
  place: string
};

TextInput.defaultProps = {
  area: false,
  input: false,
  place: null
};

export default TextInput;
