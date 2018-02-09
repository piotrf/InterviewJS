import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Story, Stories } from "../partials";

import SampleAvatar from "../static/avatar.png";

const storyObj = {
  title: "Obamacare — One Year In",
  id: "1161022966406956503",
  byline: {
    author: "Piotr F.",
    url: "https://twitter.com/presentday",
    moddate: "11-03-2017"
  },
  intro: "Text",
  context: "Context",
  media: {
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }]
  },
  interviewees: [
    {
      name: "Barack Obama",
      bio: "",
      title: "",
      avatar: SampleAvatar,
      color: "blue"
    },
    {
      name: "Donald Trump",
      bio: "",
      title: "",
      avatar: SampleAvatar,
      color: "red"
    }
  ],
  storyline: []
};

export default () => markdown`

  ## Stories

  ${(
    <ReactSpecimen>
      <Story data={storyObj} handleOpen={evt => console.log(evt)} />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Stories>
        <Story data={storyObj} handleOpen={evt => console.log(evt)} />
        <Story data={storyObj} handleOpen={evt => console.log(evt)} />
      </Stories>
    </ReactSpecimen>
  )}
`;
