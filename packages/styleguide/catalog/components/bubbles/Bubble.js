import css from "styled-components";
import { shape, string } from "prop-types";

import { color, font, radius, setSpace, setType } from "../../../utils";

const Bubble = css.div`
  ${setSpace("phm")};
  ${setSpace("pvs")};
  ${setType("x")};
  align-self: ${({ side }) => (side === "right" ? `flex-end` : `flex-start`)};
  background-color: ${({ theme }) => (theme.backg ? theme.backg : color.blueM)};
  color: ${({ theme }) => (theme.color ? theme.color : color.white)};
  display: flex;
  flex-direction: column;
  font-family: ${font.serif};
  justify-content: center;
  max-width: ${({ side }) => (side ? `260px` : `none`)};
  text-align: ${({ side }) => side};
  &:not(:last-child),
  &:not(:first-child) {
    margin-bottom: 1px;
    margin-top: 1px;
    border-radius: ${radius.s};
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.s};
  }
  &:last-child {
    ${({ side }) =>
      side === "right"
        ? `
      border-radius: ${radius.s} ${radius.s} ${radius.s} ${radius.h};
    `
        : `
      border-radius: ${radius.s} ${radius.s} ${radius.h};
    `}
  }
  &:only-child {
    ${({ side }) =>
      side === "right"
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
    backg: string,
    color: string
  }),
  side: string
};

Bubble.defaultProps = {
  theme: {
    background: null,
    color: null
  },
  side: "right"
};

export default Bubble;
