import css from "styled-components";
import {} from "prop-types";

import { color, radius, setSpace, setType } from "../../../utils";

const Legend = css.legend`
  ${setSpace("pan")};
  ${setSpace("mrm")};
  ${setType("x")};
  background-color: ${color.white};
  border-radius: ${radius.a};
  border: 1px solid ${color.greyLt};
  color: ${color.greyM};
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
`;

Legend.propTypes = {};

Legend.defaultProps = {};

export default Legend;
