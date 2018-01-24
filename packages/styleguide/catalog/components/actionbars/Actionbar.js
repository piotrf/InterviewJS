import css from "styled-components";
import { string } from "prop-types";

import { setSpace } from "../../../utils";

const satellitesBase = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Actionbar = css.div`
  ${props => (props.satellites !== null ? `${setSpace("phl")}` : ``)}
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  & > *:first-child {
    ${props =>
      props.satellites === "a" || props.satellites === "l"
        ? `
      ${satellitesBase};
      left: 0;
    `
        : ``}
  }
  & > *:last-child {
    ${props =>
      props.satellites === "a" || props.satellites === "r"
        ? `
      ${satellitesBase};
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
  satellites: string
};

Actionbar.defaultProps = {
  satellites: null
};

export default Actionbar;
