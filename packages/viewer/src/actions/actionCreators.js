export function createStory(payload) {
  return {
    type: "CREATE_STORY",
    payload
  };
}

export function savePoll(payload) {
  return {
    type: "SAVE_POLL",
    payload
  };
}

export function updateStoryline(payload) {
  return {
    type: "UPDATE_STORYLINE",
    payload
  };
}
