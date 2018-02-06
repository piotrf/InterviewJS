import css from "styled-components";

import { color, setSpace } from "../../../utils";

const ListItem = css.li`
  ${setSpace("pam")};
  display: block;
  list-style: none;
  &:not(:first-child) {
    border-top: 1px solid ${color.greyLt};
  }
`;

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
