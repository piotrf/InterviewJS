import css from "styled-components";
import { bool, string, shape } from "prop-types";

import { color, paint, skin, setSize, setType } from "../../../utils";
import actionBase from "./actionBase";

const Button = css.button`
  font-family: ${({ theme }) => theme.font};

  /* themeables */

  ${({ primary, secondary, inverted, tone, theme }) => {
    if (primary) {
      if (tone === "negative") {
        return `
          ${actionBase.graphic};
          background-color: ${paint(theme.negativeColor, "M")};
          color: ${color.flareBlk};
          &:hover {
            background-color: ${paint(theme.negativeColor, "HD")};
            color: ${color.white};
          }
        `;
      } else if (tone === "positive") {
        return `
          ${actionBase.graphic};
          background-color: ${paint(theme.positiveColor, "M")};
          color: ${color.flareBlk};
          &:hover {
            background-color: ${paint(theme.positiveColor, "HD")};
            color: ${color.white};
          }
        `;
      }
      return `
        ${actionBase.graphic};
        background-color: ${paint(theme.mainColor, "M")};
        color: ${color.flareBlk};
        &:hover {
          background-color: ${paint(theme.mainColor, "HD")};
          color: ${color.white};
        }
      `;
    } else if (secondary) {
      if (tone === "negative") {
        return `
          ${actionBase.graphic};
          background-color: ${color.white};
          color: ${paint(theme.negativeColor, "M")};
          &:hover {
            color: ${paint(theme.negativeColor, "HD")};
          }
        `;
      } else if (tone === "positive") {
        return `
          ${actionBase.graphic};
          background-color: ${color.white};
          color: ${paint(theme.positiveColor, "M")};
          &:hover {
            color: ${paint(theme.positiveColor, "HD")};
          }
        `;
      }
      return `
        ${actionBase.graphic};
        background-color: ${color.white};
        color: ${paint(theme.mainColor, "M")};
        &:hover {
          color: ${paint(theme.mainColor, "HD")};
        }
      `;
    } else if (inverted) {
      return `
        ${actionBase.graphic};
        background-color: ${color.shadowHL};
        border-color: ${color.flareLt};
        color: ${color.flareBlk};
        &:hover {
          border-color: ${color.flareLLt};
          color: ${color.white};
        };
        &:active {
          opacity: 0.75;
        }
      `;
    }
    if (tone === "negative") {
      return `
        ${actionBase.textual};
        color: ${paint(theme.negativeColor, "M")};
        &:hover {
          color: ${paint(theme.negativeColor, "HD")};
        }
      `;
    } else if (tone === "positive") {
      return `
        ${actionBase.textual};
        color: ${paint(theme.positiveColor, "M")};
        &:hover {
          color: ${paint(theme.positiveColor, "HD")};
        }
      `;
    }
    return `
      ${actionBase.textual};
      color: ${paint(theme.mainColor, "M")};
      &:hover {
        color: ${paint(theme.mainColor, "HD")};
      }
    `;
  }}

  /* iconic */

  ${({ primary, secondary, inverted, iconic }) => {
    if (iconic && (primary || secondary || inverted)) {
      return `
        ${setSize("m")};
        padding-left: 0 !important;
        padding-right: 0 !important;
        & > i {
          position: relative;
          top: -1px;
        }
      `;
    } else if (iconic && (!primary && !secondary && !inverted)) {
      return `
        ${setSize("m")};
        ${setType("l")}
        & > i {
          position: relative;
          top: -1px;
        }
      `;
    }
    return null;
  }}
`;

Button.propTypes = {
  inverted: bool,
  primary: bool,
  secondary: bool,
  tone: string,
  theme: shape({
    font: string,
    mainColor: string,
    negativeColor: string,
    positiveColor: string
  })
};

Button.defaultProps = {
  inverted: false,
  primary: false,
  secondary: false,
  tone: null,
  theme: {
    font: skin.font,
    mainColor: skin.mainColor,
    negativeColor: skin.negativeColor,
    positiveColor: skin.positiveColor
  }
};

export default Button;
