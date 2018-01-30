import css from "styled-components";
import React from "react";
import { bool } from "prop-types";

import { color, radius, setSpace, styleText } from "../../../utils";

const Input = css.input`
  ${setSpace("phs")};
  ${setSpace("pvm")};
  ${styleText.input.value};
  border-radius: ${radius.m};
  border: 1px solid ${color.greyLt};
  color: ${color.black};
  width: 100%;
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
`;

const Textarea = Input.withComponent("textarea");

const TextInput = props =>
  props.area ? <Textarea {...props} /> : <Input {...props} />;

TextInput.propTypes = {
  area: bool,
  input: bool
};

TextInput.defaultProps = {
  area: false,
  input: false
};

export default TextInput;
