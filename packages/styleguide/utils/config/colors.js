import { darken, lighten } from "polished";

import theme from "../theme";

export const colors = {
  black: "#333",
  white: "#fff",

  primaryWt: lighten(0.36, theme.colors.primary),
  primaryHL: lighten(0.27, theme.colors.primary),
  primaryLt: lighten(0.18, theme.colors.primary),
  primaryLLt: lighten(0.09, theme.colors.primary),
  primaryM: theme.colors.primary,
  primaryHD: darken(0.09, theme.colors.primary),
  primaryD: darken(0.18, theme.colors.primary),
  primaryLD: darken(0.27, theme.colors.primary),
  primaryBlk: darken(0.36, theme.colors.primary),

  alertWt: lighten(0.36, theme.colors.alert),
  alertHL: lighten(0.27, theme.colors.alert),
  alertLt: lighten(0.18, theme.colors.alert),
  alertLLt: lighten(0.09, theme.colors.alert),
  alertM: theme.colors.alert,
  alertHD: darken(0.09, theme.colors.alert),
  alertD: darken(0.18, theme.colors.alert),
  alertLD: darken(0.27, theme.colors.alert),
  alertBlk: darken(0.36, theme.colors.alert),

  greyWt: lighten(0.22, "#bfbfbf"),
  greyHL: lighten(0.165, "#bfbfbf"),
  greyLt: lighten(0.11, "#bfbfbf"),
  greyLLt: lighten(0.055, "#bfbfbf"),
  greyM: "#bfbfbf",
  greyHD: darken(0.055, "#bfbfbf"),
  greyD: darken(0.11, "#bfbfbf"),
  greyLD: darken(0.165, "#bfbfbf"),
  greyBlk: darken(0.22, "#bfbfbf"),

  flareWt: "rgba(255,255,255,.07)",
  flareHL: "rgba(255,255,255,.17375)",
  flareLt: "rgba(255,255,255,.2775)",
  flareLLt: "rgba(255,255,255,.38125)",
  flareM: "rgba(255,255,255,.485)",
  flareHD: "rgba(255,255,255,.58875)",
  flareD: "rgba(255,255,255,.6925)",
  flareLD: "rgba(255,255,255,.79625)",
  flareBlk: "rgba(255,255,255,.9)",

  shadowWt: "rgba(0,0,0,.07)",
  shadowHL: "rgba(0,0,0,.17375)", // 0,07+((0,83/8)*1)
  shadowLt: "rgba(0,0,0,.2775)",
  shadowLLt: "rgba(0,0,0,.38125)",
  shadowM: "rgba(0,0,0,.485)",
  shadowHD: "rgba(0,0,0,.58875)",
  shadowD: "rgba(0,0,0,.6925)",
  shadowLD: "rgba(0,0,0,.79625)",
  shadowBlk: "rgba(0,0,0,.9)"
};

export const color = colors;
