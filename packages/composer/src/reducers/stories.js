/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  switch (action.type) {
    case "CREATE_STORY":
      console.log("creating a story");
      return [action.payload, ...state];
    case "UPDATE_STORY":
      console.log("updating a story");
      const data = action.payload;
      return [
        ...state.slice(0, action.i),
        { ...state[action.i], ...data },
        ...state.slice(action.i + 1)
      ];
    case "DELETE_STORY":
      console.log("deleting a story");
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export default stories;
