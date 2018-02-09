import { shape, string } from "prop-types";
import css from "styled-components";
import React from "react";

import { color, setSpace } from "../../../utils";

import { Avatar, Text } from "../../components";

const UserMenuEl = css.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  ${Avatar} {
    ${setSpace("mrs")};
    border: 2px solid ${color.white};
    float: left;
    box-shadow: 0 2px 4px ${color.shadowHL};
  }
  ${Text} {
    color: ${color.blueM};
  }
`;

const UserMenu = props => (
  <UserMenuEl>
    <Avatar image={props.data.avatar} size="m" />
    <Text typo="p4">{props.data.name}</Text>
  </UserMenuEl>
);

UserMenu.propTypes = {
  data: shape({
    avatar: string,
    name: string
  }).isRequired
};

UserMenu.defaultProps = {};

export default UserMenu;
