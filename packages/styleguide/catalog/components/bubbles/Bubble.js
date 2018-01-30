import css from "styled-components";
import { shape, string } from "prop-types";

import { radius, setSpace, setType, skin } from "../../../utils";

const Bubble = css.div`
  ${setSpace("phm")};
  ${setSpace("pvs")};
  ${setType("x")};
  align-self: ${({ character }) =>
    character === "user" ? `flex-end` : `flex-start`};
  background-color: ${({ theme }) =>
    theme.backg ? theme.backg : skin.mainColor};
  color: ${({ theme }) => (theme.color ? theme.color : skin.brightColor)};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};
  justify-content: center;
  max-width: ${({ character }) => (character ? `260px` : `none`)};
  text-align: ${({ character }) => (character === "user" ? `right` : `left`)};
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.s};
    margin-bottom: 1px;
    margin-top: 1px;
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.s};
  }
  &:last-child {
    ${({ character }) =>
      character === "user"
        ? `
      border-radius: ${radius.s} ${radius.s} ${radius.s} ${radius.h};
    `
        : `
      border-radius: ${radius.s} ${radius.s} ${radius.h};
    `}
  }
  &:only-child {
    ${({ character }) =>
      character === "user"
        ? `
      border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.h};
    `
        : `
      border-radius: ${radius.h} ${radius.h} ${radius.h} ${radius.s};
    `}
  }
  & > p {
    ${setSpace("pan")};
    ${setSpace("man")};
  }
`;

Bubble.propTypes = {
  theme: shape({
    backg: string
  }),
  character: string
};

Bubble.defaultProps = {
  theme: {
    backg: skin.mainColor,
    color: skin.brightColor,
    font: skin.font
  },
  character: "user"
};

export default Bubble;
