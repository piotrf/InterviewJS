import css from "styled-components";
import { bool, string, shape } from "prop-types";

import { color, paint, skin, setSize, setType } from "../../../utils";
import actionBase from "./actionBase";

const Button = css.button`
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};

  /* themeables */

  ${({ primary, secondary, inverted, tone, theme, iconic, active }) => {
    if (primary) {
      if (tone === "negative") {
        return `
          ${actionBase.graphic};
          background-color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "M")
              : paint(skin.negativeColor, "M")
          };
          color: ${color.flareBlk};
          &:hover {
            background-color: ${
              theme.negativeColor
                ? paint(theme.negativeColor, "HD")
                : paint(skin.negativeColor, "HD")
            };
            color: ${color.white};
          }
        `;
      } else if (tone === "positive") {
        return `
          ${actionBase.graphic};
          background-color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "M")
              : paint(skin.positiveColor, "M")
          };
          color: ${color.flareBlk};
          &:hover {
            background-color: ${
              theme.positiveColor
                ? paint(theme.positiveColor, "HD")
                : paint(skin.positiveColor, "HD")
            };
            color: ${color.white};
          }
        `;
      }
      return `
        ${actionBase.graphic};
        background-color: ${
          theme.mainColor
            ? paint(theme.mainColor, "M")
            : paint(skin.mainColor, "M")
        };
        color: ${color.flareBlk};
        &:hover {
          background-color: ${
            theme.mainColor
              ? paint(theme.mainColor, "HD")
              : paint(skin.mainColor, "HD")
          };
          color: ${color.white};
        }
      `;
    } else if (secondary) {
      if (tone === "negative") {
        return `
          ${actionBase.graphic};
          background-color: ${color.white};
          color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "M")
              : paint(skin.negativeColor, "M")
          };
          &:hover {
            color: ${
              theme.negativeColor
                ? paint(theme.negativeColor, "HD")
                : paint(skin.negativeColor, "HD")
            };
          }
        `;
      } else if (tone === "positive") {
        return `
          ${actionBase.graphic};
          background-color: ${color.white};
          color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "M")
              : paint(skin.positiveColor, "M")
          };
          &:hover {
            color: ${
              theme.positiveColor
                ? paint(theme.positiveColor, "HD")
                : paint(skin.positiveColor, "HD")
            };
          }
        `;
      }
      return `
        ${actionBase.graphic};
        background-color: ${color.white};
        color: ${
          theme.mainColor
            ? paint(theme.mainColor, "M")
            : paint(skin.mainColor, "M")
        };
        &:hover {
          color: ${
            theme.mainColor
              ? paint(theme.mainColor, "HD")
              : paint(skin.mainColor, "HD")
          };
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
          background: ${color.flareLt};
          color: ${color.white};
          opacity: 0.75;
        }
        ${
          active
            ? `
          background: ${color.flareLt};
          color: ${color.white};
          opacity: 0.75;
        `
            : ``
        };
      `;
    }
    if (tone === "negative") {
      return `
        ${actionBase.textual};
        color: ${
          theme.negativeColor
            ? paint(theme.negativeColor, "M")
            : paint(skin.negativeColor, "M")
        };
        &:hover {
          color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "HD")
              : paint(skin.negativeColor, "HD")
          };
        }
      `;
    } else if (tone === "positive") {
      return `
        ${actionBase.textual};
        color: ${
          theme.positiveColor
            ? paint(theme.positiveColor, "M")
            : paint(skin.positiveColor, "M")
        };
        &:hover {
          color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "HD")
              : paint(skin.positiveColor, "HD")
          };
        }
      `;
    } else if (!primary && !secondary && !inverted && iconic) {
      return `
      ${actionBase.textual};
      color: ${
        theme.mainColor
          ? paint(theme.mainColor, "M")
          : paint(skin.mainColor, "M")
      };
      &:hover {
        color: ${
          theme.mainColor
            ? paint(theme.mainColor, "HD")
            : paint(skin.mainColor, "HD")
        };
      }
    `;
    }
    return `
        ${actionBase.textual};
        color: ${
          theme.mainColor
            ? paint(theme.mainColor, "LD")
            : paint(skin.mainColor, "LD")
        };
        &:hover {
          color: ${
            theme.mainColor
              ? paint(theme.mainColor, "Blk")
              : paint(skin.mainColor, "Blk")
          };
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
