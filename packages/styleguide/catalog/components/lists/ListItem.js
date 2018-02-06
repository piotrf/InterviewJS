import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ListItem = css.li`
  ${setSpace("pam")};
  border-bottom: 1px solid ${color.greyLt};
  display: block;
  list-style: none;
`;

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
