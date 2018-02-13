import uuidv4 from "uuid/v4";

export function createStory(title, intro) {
  return {
    id: uuidv4(),
    intro,
    title,
    type: "CREATE_STORY"
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
