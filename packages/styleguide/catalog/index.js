import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import InterviewJSLogo from "./static/interviewjs-logo.png";

import { Styles, Reset } from "../utils";

const pages = [
  {
    content: pageLoader(() => import("./WELCOME.md")),
    path: "/",
    title: "Welcome"
  },
  {
    content: require("./pages/buttons.js"),
    path: "/buttons",
    title: "Buttons"
  }
];

ReactDOM.render(
  <Catalog
    styles={[Styles]}
    logoSrc={InterviewJSLogo}
    theme={{
      background: "#f7f7f7",
      linkColor: "#495abd",
      textColor: "#000143",

      lightColor: "#f7f7f7",

      pageHeadingBackground: "#333",

      brandColor: "#495abd",

      navBarTextColor: "#000143"
    }}
    pages={pages}
    title="InterviewJS UI Library"
  />,
  document.getElementById("catalog")
);
