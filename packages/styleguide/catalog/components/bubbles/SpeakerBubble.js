import css from "styled-components";
import { shape, string } from "prop-types";
import contrast from "get-contrast";

import { color, radius, skin, setSpace } from "../../../utils";
import bubbleBase from "./bubbleBase";

const calcColor = (thisColor, thatColor) => {
  if (!contrast.isAccessible(thisColor, thatColor)) {
    return color.white;
  }
  return color.blueBlk;
};

const SystemBubble = css.div`
  ${bubbleBase};
  ${setSpace("mrm")};
  align-self: flex-start;
  ${({ animated }) =>
    !animated
      ? `
    opacity: 1;
    animation: none;
  `
      : ``};
  background-color: ${({ theme }) =>
    theme.backg ? theme.backg : skin.speakerBackg};
    &,
    & * {
      color: ${({ theme }) =>
        calcColor(
          theme.backg ? theme.backg : skin.speakerBackg,
          color.blueBlk
        )} !important;
    }
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};
  align-self: flex-start;
  text-align: left;
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.m} ${radius.h} ${radius.h} ${radius.m};
  }
  &:first-child {
    border-radius: ${radius.h} ${radius.h} ${radius.h} ${radius.m};
  }
  &:last-child {
    border-radius: ${radius.m} ${radius.h} ${radius.h} ${radius.s};
  }
  &:only-child {
    border-radius: ${radius.h} ${radius.h} ${radius.h} ${radius.s};
  }


  ${({ onDragStart }) =>
    onDragStart
      ? `
    &,
    & * {
      cursor: move;
    }`
      : ``}

  /* tweak bubble styles depending on wether the content is iframe or image */

   ${({ displayType }) =>
     displayType === "embed" || displayType === "rich"
       ? `
         ${setSpace("phs")};
         width: 100%;`
       : ``};

   /* this is for internal use only to customise auth screen bubbles */
   &,
   & * {
     ${({ theme }) =>
       theme.color
         ? `
     color: ${theme.color} !important;
     `
         : ``}
   }

   /* fill preloader based on the bubble colour */

   & .ivjs-preloader > div {
     background: ${({ theme }) =>
       calcColor(
         theme.backg ? theme.backg : skin.speakerBackg,
         color.blueBlk
       )} !important;
   }
`;

SystemBubble.propTypes = {
  theme: shape({
    backg: string,
    color: string,
    font: string
  })
};

SystemBubble.defaultProps = {
  theme: {
    backg: skin.speakerBackg,
    color: skin.speakerColor,
    font: skin.font
  }
};

export default SystemBubble;
