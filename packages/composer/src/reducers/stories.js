/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  switch (action.type) {
    case "CREATE_STORY":
      console.log("creating a story");
      return [...state, action.payload];
    case "DELETE_STORY":
      console.log("deleting a story");
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export default stories;
