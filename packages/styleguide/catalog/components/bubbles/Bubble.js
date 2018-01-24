import css from "styled-components";
import { shape, string } from "prop-types";

import { color, font, radius, setSpace, setType } from "../../../utils";

const Bubble = css.div`
  ${setSpace("phm")};
  ${setSpace("pvs")};
  ${setType("x")};
  align-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => (theme.backg ? theme.backg : color.blueM)};
  color: ${({ theme }) => (theme.color ? theme.color : color.white)};
  display: flex;
  flex-direction: column;
  font-family: ${font.pri};
  justify-content: center;
  max-width: 260px;
  &:not(:last-child),
  &:not(:first-child) {
    margin-bottom: 2px;
    margin-top: 2px;
    border-radius: ${radius.s};
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.s};
  }
  &:last-child {
    ${({ persona }) =>
      persona === "user"
        ? `
      border-radius: ${radius.s} ${radius.s} ${radius.s} ${radius.h};
    `
        : `
      border-radius: ${radius.s} ${radius.s} ${radius.h};
    `}
  }
  &:only-child {
    ${({ persona }) =>
      persona === "user"
        ? `
      border-radius: ${radius.h} ${radius.h} ${radius.s} ${radius.h};
    `
        : `
      border-radius: ${radius.h} ${radius.h} ${radius.h} ${radius.s};
    `}
  }
`;

Bubble.propTypes = {
  theme: shape({
    backg: string,
    color: string
  }),
  persona: string
};

Bubble.defaultProps = {
  theme: {
    background: null,
    color: null
  },
  persona: "user"
};

export default Bubble;
