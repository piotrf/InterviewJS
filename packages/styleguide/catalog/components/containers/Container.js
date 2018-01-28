import css from "styled-components";
import { string } from "prop-types";

import { color, radius, setSpace } from "../../../utils";

const Container = css.div`
  ${props =>
    props.white
      ? `
    background: ${color.white};
  `
      : ``}
  ${props =>
    props.grey
      ? `
    background: ${color.greyWt};
  `
      : ``}
  ${props =>
    props.shift
      ? `
    box-shadow: 0 1px 3px ${color.shadowHL};
  `
      : ``}
  ${props =>
    props.inset
      ? `
    box-shadow: inset 0 1px 3px ${color.shadowHL};
  `
      : ``}
  ${props =>
    props.rounded
      ? `
    border-radius: ${radius.h};
  `
      : ``}
  ${props =>
    props.padded
      ? `
    ${setSpace("pam")};
  `
      : ``}
`;

Container.propTypes = {
  name: string.isRequired
};

Container.defaultProps = {};

export default Container;
