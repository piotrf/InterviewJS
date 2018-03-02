import uuidv4 from "uuid/v4";

export function createStory({
  author = "",
  authorLink = "",
  context = "",
  interviewees = [],
  intro = "",
  media = {},
  pubDate = "",
  title = ""
}) {
  return {
    type: "CREATE_STORY",
    payload: {
      author,
      authorLink,
      context,
      interviewees,
      intro,
      media,
      pubDate,
      title,
      id: uuidv4(),
      modDate: new Date()
    }
  };
}

export function updateStory(payload, storyIndex) {
  return {
    type: "UPDATE_STORY",
    storyIndex,
    payload
  };
}

export function deleteStory(storyIndex) {
  return {
    type: "DELETE_STORY",
    storyIndex
  };
}

export function createInterviewee(storyIndex, payload) {
  return {
    type: "CREATE_INTERVIEWEE",
    storyIndex,
    payload
  };
}

export function updateInterviewee(storyIndex, intervieweeIndex, payload) {
  return {
    type: "UPDATE_INTERVIEWEE",
    intervieweeIndex,
    payload,
    storyIndex
  };
}

export function deleteInterviewee(storyIndex, intervieweeIndex) {
  return {
    type: "DELETE_INTERVIEWEE",
    intervieweeIndex,
    storyIndex
  };
}

export function addStorylineItem(storyIndex, intervieweeIndex, content) {
  return {
    type: "ADD_STORYLINE_ITEM",
    content,
    intervieweeIndex,
    storyIndex
  };
}

export function updateStorylineItem(
  content,
  intervieweeIndex,
  storyIndex,
  storylineItemIndex
) {
  return {
    type: "UPDATE_STORYLINE_ITEM",
    content,
    intervieweeIndex,
    storyIndex,
    storylineItemIndex
  };
}
