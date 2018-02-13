/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  switch (action.type) {
    case "CREATE_STORY":
      const newStory = {
        id: action.id,
        intro: action.intro,
        title: action.title
      };
      state.push(newStory);
      return state;
    default:
      return state;
  }
}

export default stories;
