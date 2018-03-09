import css from "styled-components";
import { string } from "prop-types";

import { setType, skin } from "../../../utils";

const Tabs = css.ul`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
