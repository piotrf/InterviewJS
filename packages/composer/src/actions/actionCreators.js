import uuidv4 from "uuid/v4";

export function createStory({
  byLink = "",
  byName = "",
  context = "",
  interviewees = [],
  intro = "",
  media = [],
  pubDate = "",
  storyline = [],
  title = ""
}) {
  return {
    type: "CREATE_STORY",
    payload: {
      byLink,
      byName,
      context,
      id: uuidv4(),
      interviewees,
      intro,
      media,
      pubDate,
      storyline,
      title
    }
  };
}

export function deleteStory(i) {
  return {
    type: "DELETE_STORY",
    i
  };
}
