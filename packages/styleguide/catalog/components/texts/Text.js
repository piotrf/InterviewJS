import css from "styled-components";
import { string } from "prop-types";

import { color, font, setType, skin } from "../../../utils";

const Text = css.span`
  font-family: ${skin.font};
  ${({ typo }) => {
    if (typo === "h1") {
      return `
        ${setType("l")};
        font-weight: bold;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "h2") {
      return `
        ${setType("m")};
        font-weight: bold;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "h3") {
      return `
        ${setType("l")};
        font-style: italic;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "h4") {
      return `
        ${setType("m")};
        font-style: italic;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "h5") {
      return `
        ${setType("s")};
        font-style: italic;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "h6") {
      return `
        ${setType("x")};
        font-style: italic;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p1") {
      return `
        ${setType("s")};
        font-weight: bold;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p2") {
      return `
        ${setType("s")};
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p3") {
      return `
        ${setType("s")};
        font-style: italic;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p4") {
      return `
        ${setType("x")};
        font-weight: bold;
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p5") {
      return `
        ${setType("x")};
        `;
    }
  }}
  ${({ typo }) => {
    if (typo === "p6") {
      return `
        ${setType("x")};
        font-style: italic;
        `;
    }
  }}
`;

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
