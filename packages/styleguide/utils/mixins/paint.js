import { darken, lighten } from "polished";

export const paint = (hex, val) => {
  switch (val) {
    case "Wt":
      return lighten(0.36, hex);
      break;
    case "HL":
      return lighten(0.27, hex);
      break;
    case "Lt":
      return lighten(0.18, hex);
      break;
    case "LLt":
      return lighten(0.09, hex);
      break;
    case "HD":
      return darken(0.09, hex);
      break;
    case "D":
      return darken(0.18, hex);
      break;
    case "LD":
      return darken(0.27, hex);
      break;
    case "Blk":
      return darken(0.36, hex);
      break;
    case "M":
    default:
      return hex;
      break;
  }
};

