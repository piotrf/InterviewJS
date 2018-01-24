import fluid from "../functions/fluid";

import { sizes } from "../";

export const setSize = args => {
  const prop = args.substr(0, 1);
  const size = args.substr(1, 1);
  switch (prop) {
    case "h":
      return fluid("height", sizes[size][0], sizes[size][1]);
      break;
    case "w":
      return fluid("width", sizes[size][0], sizes[size][1]);
      break;
    case "s":
    default:
      return fluid(["width", "height"], sizes[size][0], sizes[size][1]);
  }
};
