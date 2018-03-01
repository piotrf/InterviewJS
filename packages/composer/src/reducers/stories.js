/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  switch (action.type) {
    case "CREATE_STORY":
      console.log("creating a story");
      return [action.payload, ...state];

    case "UPDATE_STORY":
      console.log("updating a story");
      return [
        ...state.slice(0, action.i),
        { ...state[action.i], ...action.payload },
        ...state.slice(action.i + 1)
      ];

    case "DELETE_STORY":
      console.log("deleting a story");
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];

    case "CREATE_INTERVIEWEE":
      console.log("creating interviewee");
      return [
        ...state.slice(0, action.storyIndex),
        {
          ...state[action.storyIndex],
          interviewees: [
            action.payload,
            ...state[action.storyIndex].interviewees
          ]
        },
        ...state.slice(action.storyIndex + 1)
      ];

    case "UPDATE_INTERVIEWEE":
      console.log("updating interviewee");
      const updateStoryInterviewees = state[action.storyIndex].interviewees;
      return [
        ...state.slice(0, action.storyIndex),
        {
          ...state[action.storyIndex],
          interviewees: [
            ...updateStoryInterviewees.slice(0, action.i),
            { ...updateStoryInterviewees, ...action.payload },
            ...updateStoryInterviewees.slice(action.i + 1)
          ]
        },
        ...state.slice(action.storyIndex + 1)
      ];

    case "DELETE_INTERVIEWEE":
      console.log("deleting interviewee");
      const deleteStoryInterviewees = state[action.storyIndex].interviewees;
      return [
        ...state.slice(0, action.storyIndex),
        {
          ...state[action.storyIndex],
          interviewees: [
            ...deleteStoryInterviewees.slice(0, action.i),
            ...deleteStoryInterviewees.slice(action.i + 1)
          ]
        },
        ...state.slice(action.storyIndex + 1)
      ];

    default:
      return state;
  }
}

export default stories;
