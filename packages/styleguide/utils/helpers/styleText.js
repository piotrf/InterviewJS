import { font } from "../config/fonts";
import { setType } from "../mixins/setType";
import { track } from "../config/tracking";

export const styleText = {
  input: {
    value: `
      ${setType("x")};
      font-family: ${font.serif};
    `,
    placeholder: `
      ${setType("x")};
      font-family: ${font.serif};
      font-style: italic;
    `
  },
  label: `
    ${setType("x")};
    font-family: ${font.serif};
    font-weight: bold;
  `,
  characterCount: `
    ${setType("x")};
    font-family: ${font.serif};
  `
};

export default styleText;
