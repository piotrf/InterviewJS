import css from "styled-components";
import {} from "prop-types";

import { setSpace } from "../../../utils";

const Breadcrumbs = css.ol`
  ${setSpace("mvn")};
  ${setSpace("pan")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  width: 100%;
`;

Breadcrumbs.propTypes = {};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
