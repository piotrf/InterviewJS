import uuidv4 from "uuid/v4";

export function createStory({
  author = "",
  byline = {},
  context = "",
  interviewees = [],
  intro = "",
  media = [],
  storyline = [],
  title = ""
}) {
  return {
    type: "CREATE_STORY",
    payload: {
      author,
      byline,
      context,
      id: uuidv4(),
      interviewees,
      intro,
      media,
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

// // increment likes
// export function increment(index) {
//   return {
//     type: "INCREMENT_LIKES",
//     index
//   };
// }
//
// // add comment
// export function addComment(postId, author, comment) {
//   console.log("dispatching add comment");
//   return {
//     type: "ADD_COMMENT",
//     postId,
//     author,
//     comment
//   };
// }
//
// // remove comment
// export function removeComment(postId, i) {
//   return {
//     type: "REMOVE_COMMENT",
//     i,
//     postId
//   };
// }
