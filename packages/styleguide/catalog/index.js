import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import InterviewJSLogo from "./static/interviewjs-logo.png";
import theme from "./theme";

import { Styles, Reset } from "../utils";

const pages = [
  {
    content: pageLoader(() => import("./WELCOME.md")),
    path: "/",
    title: "Welcome"
  },
  {
    content: require("./pages/icons.js"),
    path: "/icons",
    title: "Icons"
  },
  {
    content: require("./pages/buttons.js"),
    path: "/buttons",
    title: "Buttons"
  },
  {
    content: require("./pages/links.js"),
    path: "/links",
    title: "Links"
  },
  {
    content: require("./pages/containers.js"),
    path: "/containers",
    title: "Containers"
  },
  {
    content: require("./pages/actionbars.js"),
    path: "/actionbars",
    title: "Actionbars"
  },
  {
    content: require("./pages/avatars.js"),
    path: "/avatars",
    title: "Avatars"
  },
  {
    content: require("./pages/bubbles.js"),
    path: "/bubbles",
    title: "Bubbles"
  }
];

ReactDOM.render(
  <Catalog
    logoSrc={InterviewJSLogo}
    pages={pages}
    styles={[Styles]}
    theme={theme}
    title="InterviewJS UI Library"
  />,
  document.getElementById("catalog")
);
