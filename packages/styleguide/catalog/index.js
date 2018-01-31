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
    title: "Forms",
    pages: [
      {
        content: require("./pages/form-elements.js"),
        path: "/forms/elements",
        title: "Elements"
      },
      {
        content: require("./pages/form-items.js"),
        path: "/forms/items",
        title: "Form items"
      }
    ]
  },
  {
    content: require("./pages/icons.js"),
    path: "/icons",
    title: "Icons"
  },
  {
    content: require("./pages/messages.js"),
    path: "/messages",
    title: "Messages"
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
  },
  {
    title: "Partials",
    pages: [
      {
        content: require("./pages/partials-viewer.js"),
        path: "/partials/viewer",
        title: "Viewer Partials"
      }
    ]
  },
  {
    title: "Views",
    pages: [
      {
        content: require("./pages/viewer-chat.js"),
        path: "/views/viewer/chat",
        title: "Viewer Chat"
      },
      {
        content: require("./pages/viewer-intro.js"),
        path: "/views/viewer/intro",
        title: "Viewer Intro"
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    logoSrc={InterviewJSLogo}
    pages={pages}
    responsiveSizes={[
      { name: "phone", width: 360, height: 640 },
      { name: "tablet", width: 1024, height: 768 },
      { name: "desktop", width: 1440, height: 900 }
    ]}
    theme={theme}
    title="InterviewJS UI Library"
  />,
  document.getElementById("catalog")
);
