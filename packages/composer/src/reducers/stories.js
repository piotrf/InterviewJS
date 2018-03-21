/* eslint no-case-declarations: 0 */
/* eslint no-console: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-plusplus: 0 */

import uuidv4 from "uuid/v4";
import { base } from "../configureStore";

function stories(state = [], action) {
  const {
    type,
    storyIndex,
    payload,
    intervieweeIndex,
    storyItemIndex
  } = action;

  // console.log(action);

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

    case "SYNC_STORY":
      console.log("sync/update a story");
      const prevStory = state.find((story) => story.id === payload.id);
      if (!prevStory) return [payload, ...state];
      return state.map((story) => {
        if (story.id === payload.id && payload.version > story.version)
          return payload;
        return story;
      });

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

      const ADD_STORYLINE_ITEM_STATE = [
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
      return ADD_STORYLINE_ITEM_STATE;

    case "MOVE_STORYLINE_ITEM":
      console.log("moving storyline item");
      const { to, from } = payload;
      const moveStorylineArr =
        state[storyIndex].interviewees[intervieweeIndex].storyline;
      const newArr = moveStorylineArr.slice();
      newArr.splice(to, 0, newArr.splice(from, 1)[0]);
      const MOVE_STORYLINE_ITEM_STATE = [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [
            ...state[storyIndex].interviewees.slice(0, intervieweeIndex),
            {
              ...state[storyIndex].interviewees[intervieweeIndex],
              storyline: newArr
            },
            ...state[storyIndex].interviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];
      return MOVE_STORYLINE_ITEM_STATE;

    case "DELETE_STORYLINE_ITEM":
      console.log("deleting storyline item");
      const deleteStorylineArr =
        state[storyIndex].interviewees[intervieweeIndex].storyline;
      const DELETE_STORYLINE_ITEM_STATE = [
        ...state.slice(0, storyIndex),
        {
          ...state[storyIndex],
          interviewees: [
            ...state[storyIndex].interviewees.slice(0, intervieweeIndex),
            {
              ...state[storyIndex].interviewees[intervieweeIndex],
              storyline: [
                ...deleteStorylineArr.slice(0, storyItemIndex),
                ...deleteStorylineArr.slice(storyItemIndex + 1)
              ]
            },
            ...state[storyIndex].interviewees.slice(intervieweeIndex + 1)
          ]
        },
        ...state.slice(storyIndex + 1)
      ];
      return DELETE_STORYLINE_ITEM_STATE;

    default:
      return state;
  }
}

function storiesWrapper(state = [], action) {
  const NAMESPACE = "alpha";

  const { type, storyIndex, payload } = action;

  console.log(action);

  const newState = stories(state, action);

  if (typeof storyIndex !== "number") {
    console.log("no storyIndex");
    return newState;
  }

  let storyId = null;
  let uid = "anon";

  if (typeof storyIndex === "number" && state[storyIndex])
    storyId = state[storyIndex].id;
  if (type === "CREATE_STORY") storyId = payload.id;

  if (!storyId) storyId = `temp-${uuidv4()}`;

  console.log(uid, storyId);

  let currentStory = newState.find((story) => story.id === storyId);
  if (type === "DELETE_STORY")
    currentStory = state.find((story) => story.id === storyId);
  console.log(currentStory);

  if (!currentStory) return newState;
  if (currentStory.ignore) return newState;

  if (!currentStory.created) currentStory.created = new Date();
  currentStory.lastUpdated = new Date();
  if (!currentStory.version) currentStory.version = 0;
  currentStory.version++;

  if (currentStory.uid) uid = currentStory.uid;


  if (type === "CREATE_STORY") {
    base.post(`stories-${NAMESPACE}/${uid}/${storyId}`, {
      data: currentStory,
      then(err) {
        if (err) console.log(err);
      }
    });
  } else if (type === "SYNC_STORY") {
    // NOOP;
  } else if (type === "DELETE_STORY") {
    base.post(`stories-${NAMESPACE}-deleted/${uid}/${storyId}`, {
      data: currentStory,
      then(err) {
        if (err) {
          console.log(err);
        } else {
          base.remove(`stories-${NAMESPACE}/${uid}/${storyId}`, (err2) => {
            if (err2) console.log(err2);
          });
        }
      }
    });
  } else {
    base.update(`stories-${NAMESPACE}/${uid}/${storyId}`, {
      data: currentStory,
      then(err) {
        if (err) console.log(err);
      }
    });
  }

  return newState;
}

export default stories; // storiesWrapper
