import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Story, Stories } from "../partials";

import SampleAvatar from "../static/avatar.png";

const stories = {
  id1: {
    title: "Dangerous Ground Report",
    summary:
      "This would be a summary of the story, lorem ipsum dolor sit consequeter",
    modified: "2017-09-20",
    interviewees: [
      {
        name: "Barack Obama",
        avatar: SampleAvatar
      },
      {
        name: "Donald Trump",
        avatar: SampleAvatar
      }
    ]
  },
  id2: {
    title: "Obamacare—One Year In",
    summary:
      "This would be a summary of the story, lorem ipsum dolor sit consequeter",
    modified: "2017-09-20",
    interviewees: [
      {
        name: "Barack Obama",
        avatar: SampleAvatar
      },
      {
        name: "Donald Trump",
        avatar: SampleAvatar
      }
    ]
  }
};
const storiesIds = ["id1", "id2"];

const storyObj = stories[storiesIds[0]];
const storiesObj = { stories, storiesIds };

export default () => markdown`

  ## Stories

  ${(
    <ReactSpecimen>
      <Story data={storyObj} handleOpen={(evt) => console.log(evt)} />
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen>
      <Stories data={storiesObj} />
    </ReactSpecimen>
  )}

`;
