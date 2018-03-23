/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  const { type, payload } = action;

  // console.log(action);

  switch (type) {
    case "CREATE_STORY":
      console.log("creating a story");
      return payload; // [payload, ...state];

    // case "UPDATE_STORY":
    //   console.log("updating a story");
    //   return [
    //     ...state.slice(0, storyIndex),
    //     { ...state[storyIndex], ...payload },
    //     ...state.slice(storyIndex + 1)
    //   ];

    default:
      return state;
  }
}

export default stories;
