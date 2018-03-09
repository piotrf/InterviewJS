import css from "styled-components";
import {} from "prop-types";

import { color } from "../../../utils";

const PaneTabs = css.ul`
  align-content: stretch;
  align-items: stretch;
  background-color: ${color.greyWt};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%:
`;

PaneTabs.propTypes = {};

PaneTabs.defaultProps = {};

export default PaneTabs;
