import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Story, Stories } from "../partials";

import SampleAvatar from "../static/avatar.png";

const storyObj = {
  author: "Piotr F.",
  byLink: "https://twitter.com/presentday",
  context: "Context",
  id: "1161022966406956503",
  intro: "Text",
  pubDate: "11-03-2017",
  title: "Obamacare — One Year In",
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
      <Story
        data={storyObj}
        handleDelete={() => console.log("handleDelete")}
        handleOpen={e => console.log(e)}
      />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Stories>
        <Story
          data={storyObj}
          handleDelete={() => console.log("handleDelete")}
          handleOpen={e => console.log(e)}
        />
        <Story
          data={storyObj}
          handleDelete={() => console.log("handleDelete")}
          handleOpen={e => console.log(e)}
        />
      </Stories>
    </ReactSpecimen>
  )}
`;
