/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */

function stories(state = [], action) {
  const { type, storyIndex, payload, intervieweeIndex } = action;

  switch (type) {
    case "CREATE_STORY":
      console.log("creating a story");
      return [payload, ...state];

    case "UPDATE_STORY":
      console.log("updating a story");
      return [
        ...state.slice(0, storyIndex),
        { ...state[storyIndex], ...payload },
        ...state.slice(storyIndex + 1)
      ];

    case "DELETE_STORY":
      console.log("deleting a story");
      return [...state.slice(0, storyIndex), ...state.slice(storyIndex + 1)];

    case "CREATE_INTERVIEWEE":
      console.log("creating interviewee");
      return [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [payload, ...state[storyIndex].interviewees]
        },
        ...state.slice(storyIndex + 1)
      ];

    case "UPDATE_INTERVIEWEE":
      console.log("updating interviewee");
      const updateStoryInterviewees = state[storyIndex].interviewees;
      return [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [
            ...updateStoryInterviewees.slice(0, intervieweeIndex),
            { ...updateStoryInterviewees[intervieweeIndex], ...payload },
            ...updateStoryInterviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];

    case "DELETE_INTERVIEWEE":
      console.log("deleting interviewee");
      const deleteStoryInterviewees = state[storyIndex].interviewees;
      return [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [
            ...deleteStoryInterviewees.slice(0, intervieweeIndex),
            ...deleteStoryInterviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];

    case "ADD_STORYLINE_ITEM":
      console.log("adding storyline item");
      return [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [
            ...state[storyIndex].interviewees.slice(0, intervieweeIndex),
            {
              ...state[storyIndex].interviewees[intervieweeIndex],
              storyline: [
                ...state[storyIndex].interviewees[intervieweeIndex].storyline,
                payload
              ]
            },
            ...state[storyIndex].interviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];

    case "MOVE_STORYLINE_ITEM":
      console.log("moving storyline item");
      console.log(payload);
      const moveStorylineObj =
        state[storyIndex].interviewees[intervieweeIndex].storyline;
      return [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          inteviewees: [
            ...state[storyIndex].interviewees.slice(0, intervieweeIndex),
            {
              ...state[storyIndex].interviewees[intervieweeIndex],
              storyline: [
                moveStorylineObj.splice(
                  payload.to,
                  0,
                  moveStorylineObj.splice(payload.from, 1)[0]
                )
              ]
            },
            ...state[storyIndex].interviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];

    default:
      return state;
  }
}

export default stories;
