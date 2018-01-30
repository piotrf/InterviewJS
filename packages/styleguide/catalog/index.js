import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import InterviewJSLogo from "./static/interviewjs-logo.png";
import theme from "./theme";

const pages = [
  {
    content: pageLoader(() => import("./WELCOME.md")),
    path: "/",
    title: "Welcome"
  },
  {
    title: "Actions",
    pages: [
      {
        path: "actions/default-variations",
        title: "Default",
        content: require("./pages/actions-default.js")
      },
      {
        path: "actions/toned-variations",
        title: "Toned",
        content: require("./pages/actions-toned.js")
      },
      {
        path: "actions/themeable-variations",
        title: "Themeable",
        content: require("./pages/actions-themeable.js")
      },
      {
        path: "actions/inverted-variations",
        title: "Inverted",
        content: require("./pages/actions-inverted.js")
      }
    ]
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
    content: require("./pages/breadcrumbs.js"),
    path: "/breadcrumbs",
    title: "Breadcrumbs"
  },
  {
    title: "Bubbles",
    pages: [
      {
        content: require("./pages/bubbles.js"),
        path: "/bubbles",
        title: "Bubbles"
      },
      {
        content: require("./pages/bubblegroups.js"),
        path: "/bubblegroups",
        title: "Bubble groups"
      }
    ]
  },
  {
    content: require("./pages/containers.js"),
    path: "/containers",
    title: "Containers"
  },
  {
    content: require("./pages/icons.js"),
    path: "/icons",
    title: "Icons"
  },
  {
    content: require("./pages/preloaders.js"),
    path: "/preloaders",
    title: "Preloaders"
  },
  {
    content: require("./pages/separators.js"),
    path: "/separators",
    title: "Separators"
  }
];

ReactDOM.render(
  <Catalog
    logoSrc={InterviewJSLogo}
    pages={pages}
    theme={theme}
    title="InterviewJS UI Library"
  />,
  document.getElementById("catalog")
);
