import fluid from "../functions/fluid";

import { lead, fsize } from "../";

export const setType = size => {
  switch (size) {
    case "h":
      return (
        fluid("font-size", fsize.h[0], fsize.h[1]) + `line-height: ${lead.m}`
      );
      break;
    case "l":
      return (
        fluid("font-size", fsize.l[0], fsize.l[1]) + `line-height: ${lead.l}`
      );
      break;
    case "s":
      return (
        fluid("font-size", fsize.s[0], fsize.s[1]) + `line-height: ${lead.h}`
      );
      break;
    case "x":
      return (
        fluid("font-size", fsize.x[0], fsize.x[1]) + `line-height: ${lead.l}`
      );
      break;
    case "m":
    default:
      return (
        fluid("font-size", fsize.m[0], fsize.m[1]) + `line-height: ${lead.l}`
      );
  }
};
