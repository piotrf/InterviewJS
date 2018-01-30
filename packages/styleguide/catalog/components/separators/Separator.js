import css from "styled-components";
import { string } from "prop-types";

import { color, setSpace } from "../../../utils";

const Separator = css.hr`
  ${setSpace("pan")};
  border-style: solid;
  ${props =>
    props.dir === "v"
      ? `
      ${setSpace(`mh${props.size}`)};
      ${setSpace("mvn")};
      border-color: ${props.effect === "silent" ? `transparent` : color.greyLt};
      border-width: 0 0 0 1px;
      display: inline-block;
      height: 1.25em;
      vertical-align: text-top;
  `
      : `
      ${setSpace("mhn")}
      ${setSpace(`mv${props.size}`)};
      border-color: ${props.effect === "silent" ? `transparent` : color.greyLt};
      border-width: 1px 0 0;
      border-width: 1px 0 0;
      display: block;
      width: 100%;
  `}
`;

Separator.propTypes = {
  dir: string,
  size: string,
  effect: string
};

Separator.defaultProps = {
  dir: "h",
  size: "m",
  effect: null
};

export default Separator;
