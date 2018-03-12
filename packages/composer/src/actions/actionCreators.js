import uuidv4 from "uuid/v4";

export function createStory({
  author = "",
  authorLink = "",
  context = "",
  interviewees = [],
  intro = "",
  media = {},
  poll = [],
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
      poll,
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
    payload: {
      ...payload,
      id: uuidv4(),
      storyline: []
    }
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

export function addStorylineItem(storyIndex, intervieweeIndex, payload) {
  return {
    type: "ADD_STORYLINE_ITEM",
    id: uuidv4(),
    intervieweeIndex,
    order: 0,
    payload,
    storyIndex
  };
}

export function updateStorylineItem(
  storyIndex,
  intervieweeIndex,
  storylineItemIndex,
  payload
) {
  return {
    type: "UPDATE_STORYLINE_ITEM",
    intervieweeIndex,
    payload,
    storyIndex,
    storylineItemIndex
  };
}

export function moveStorylineItem(storyIndex, intervieweeIndex, payload) {
  return {
    type: "MOVE_STORYLINE_ITEM",
    intervieweeIndex,
    payload,
    storyIndex
  };
}

export function deleteStorylineItem(
  storyIndex,
  intervieweeIndex,
  storyItemIndex
) {
  return {
    type: "DELETE_STORYLINE_ITEM",
    intervieweeIndex,
    storyItemIndex,
    storyIndex
  };
}

export function signInUser(payload) {
  return {
    type: "SIGNIN_USER",
    payload
  };
}

export function signOutUser() {
  return {
    type: "SIGNOUT_USER"
  };
}
