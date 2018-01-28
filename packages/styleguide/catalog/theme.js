import { color, font } from "../utils";

export default {
  // Colors
  background: color.white,
  textColor: color.shadowD,
  codeColor: color.primaryD,
  linkColor: color.primaryM,

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: color.greyWt,

  // Used in PageHeader
  pageHeadingBackground: color.primaryBlk,
  pageHeadingTextColor: color.white,

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 160,

  // Used for navigation bar
  navBarBackground: color.greyWt,
  navBarTextColor: color.primaryM,

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: color.primaryM,

  sidebarColor: color.white,
  sidebarColorActive: "#D1312E",
  sidebarColorText: color.primaryBlk,
  sidebarColorTextActive: color.primaryM,
  sidebarColorLine: color.shadowWt,
  sidebarColorHeading: color.primaryLD,

  // Used in the html, react, and image specimens.
  bgLight: color.greyWt,
  bgDark: color.primaryBlk,

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: "#FF5555" },
    punctuation: { color: "#535353" },
    script: { color: "#3F7397" },
    function: { color: "#FF5555" },
    keyword: { color: "#3F7397" },
    string: { color: "#00263E" }
  },

  // Patterns
  checkerboardPatternLight:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=",
  checkerboardPatternDark:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==",

  // Fonts
  fontFamily: font.sans,
  fontHeading: font.sans,
  fontMono: "'Roboto Mono', monospace",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2
};
