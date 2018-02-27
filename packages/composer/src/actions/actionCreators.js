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

export function updateStory(payload, i) {
  return {
    type: "UPDATE_STORY",
    i,
    payload
  };
}

export function deleteStory(i) {
  return {
    type: "DELETE_STORY",
    i
  };
}

export function createInterviewee(storyIndex, payload) {
  return {
    type: "CREATE_INTERVIEWEE",
    storyIndex,
    payload
  };
}

export function updateInterviewee(storyIndex, i, payload) {
  return {
    type: "UPDATE_INTERVIEWEE",
    i,
    payload,
    storyIndex
  };
}
export function deleteInterviewee(storyIndex, i) {
  console.log("storyIndex: ", storyIndex);
  console.log("i: ", i);
  return {
    type: "DELETE_INTERVIEWEE",
    i,
    storyIndex
  };
}
