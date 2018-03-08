import css from "styled-components";

import { color, radius } from "../../../utils";

const BubbleHTMLContent = css.div`
  border-radius: ${radius.m};
  line-height: 0;
  overflow: hidden;
  & > img {
    height: 100%;
    width: 100%;
  }
  & > a {
    color: ${color.blueM};
    white-space: wrap;
  }
  & > .iframe {
    height: 100%;
    position: relative;
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
    iframe,
    object,
    embed {
      height: 100%;
      left: 0;
      max-width: 100% !important;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

export default BubbleHTMLContent;
