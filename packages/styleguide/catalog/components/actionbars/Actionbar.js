import css from "styled-components";
import { string } from "prop-types";

import { setSpace } from "../../../utils";

const satelliteBase = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Actionbar = css.div`
  ${props => (props.satellite !== null ? `${setSpace("phl")}` : ``)};
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  & > *:first-child {
    ${props =>
      props.satellite === "both" || props.satellite === "left"
        ? `
      ${satelliteBase};
      left: 0;
    `
        : ``}
  }
  & > *:last-child {
    ${props =>
      props.satellite === "both" || props.satellite === "right"
        ? `
      ${satelliteBase};
      right: 0;
    `
        : ``}
  }
  & > *:not(:first-child) {
    ${setSpace("mlx")};
  }
  & > *:not(:last-child) {
    ${setSpace("mrx")};
  }
`;

Actionbar.propTypes = {
  satellite: string
};

Actionbar.defaultProps = {
  satellite: null
};

export default Actionbar;
