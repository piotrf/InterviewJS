import css from "styled-components";
import {} from "prop-types";

import { setSpace } from "../../../utils";

const FormItem = css.fieldset`
  ${setSpace("man")};
  ${setSpace("pan")};
  border: none;
  position: relative;
  & > label {
    ${setSpace("mls")};
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    z-index: 100;
  }
  & > legend {
    ${setSpace("mrs")};
    right: 0;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    z-index: 100;
  }
  & sup {
    ${setSpace("mrs")};
    ${setSpace("mtm")};
    position: absolute;
    right: 2px;
    text-align: center;
    top: 2px;
    width: 20px;
    z-index: 200;
  }
  & sup + input,
  & sup + textarea {
    ${setSpace("prl")};
  }
`;

FormItem.propTypes = {};

FormItem.defaultProps = {};

export default FormItem;
