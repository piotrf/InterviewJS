import uuidv4 from "uuid/v4";
// import Raven from "raven-js";
import { Storage } from "aws-amplify";
import axios from "axios";
// import { base } from "../configureStore";

export function createStory({
  uid = "anonymous",
  author = "",
  authorLink = "",
  context = "",
  cover = null,
  logo = null,
  interviewees = [
    {
      avatar: "",
      bio: "",
      color: "",
      id: uuidv4(),
      name: "Name of interviewee",
      srcText: "",
      storyline: [],
      title: ""
    }
  ],
  intro = "",
  poll = [],
  pubDate = "",
  title = ""
}) {
  return {
    type: "CREATE_STORY",
    payload: {
      author,
      authorLink,
      context,
      cover,
      interviewees,
      intro,
      logo,
      poll,
      pubDate,
      title,
      uid,
      id: uuidv4(),
      modDate: new Date()
    }
  };
}

export function updateStory(payload, storyIndex) {
  return {
    type: "UPDATE_STORY",
    storyIndex,
    payload
  };
}

export function syncStory(payload) {
  return {
    type: "SYNC_STORY",
    payload
  };
}

export function deleteStory(storyIndex) {
  return {
    type: "DELETE_STORY",
    storyIndex
  };
}

export function createInterviewee(storyIndex, payload) {
  return {
    type: "CREATE_INTERVIEWEE",
    storyIndex,
    payload: {
      ...payload,
      id: uuidv4(),
      storyline: []
    }
  };
}

export function updateInterviewee(storyIndex, intervieweeIndex, payload) {
  return {
    type: "UPDATE_INTERVIEWEE",
    intervieweeIndex,
    payload,
    storyIndex
  };
}

export function deleteInterviewee(storyIndex, intervieweeIndex) {
  return {
    type: "DELETE_INTERVIEWEE",
    intervieweeIndex,
    storyIndex
  };
}

export function addStorylineItem(storyIndex, intervieweeIndex, payload) {
  return {
    type: "ADD_STORYLINE_ITEM",
    id: uuidv4(),
    intervieweeIndex,
    order: 0,
    payload,
    storyIndex
  };
}

export function updateStorylineItem(
  storyIndex,
  intervieweeIndex,
  storylineItemIndex,
  payload
) {
  return {
    type: "UPDATE_STORYLINE_ITEM",
    intervieweeIndex,
    payload,
    storyIndex,
    storylineItemIndex
  };
}

export function moveStorylineItem(storyIndex, intervieweeIndex, payload) {
  return {
    type: "MOVE_STORYLINE_ITEM",
    intervieweeIndex,
    payload,
    storyIndex
  };
}

export function deleteStorylineItem(
  storyIndex,
  intervieweeIndex,
  storyItemIndex
) {
  return {
    type: "DELETE_STORYLINE_ITEM",
    intervieweeIndex,
    storyItemIndex,
    storyIndex
  };
}

export function signInUser(payload) {
  return {
    type: "SIGNIN_USER",
    payload
  };
}

export function signOutUser() {
  return {
    type: "SIGNOUT_USER"
  };
}

export function noop() {
  return {
    type: "NOOP"
  };
}

export function syncFirebaseStories() {

  return (dispatch) => {
    dispatch(noop());

    Storage.vault.list('stories/')
      .then(stories => {
        console.log(stories);
        stories.forEach(({key}) => {
          Storage.vault.get(key)
            .then(url => {
              axios.get(url)
                .then(response => dispatch(syncStory(response.data)))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        });
      })
    .catch(err => console.log(err));

    // uid = "anon"
    // const NAMESPACE = "alpha";
    // base
    //   .fetch(`stories-${NAMESPACE}/${uid}/`, {
    //     asArray: true
    //   })
    //   .then((data) => {
    //     data.forEach((story) => {
    //       dispatch(syncStory(story));
    //     });
    //   })
    //   .catch((error) => {
    //     Raven.captureException(error);
    //   });

    return {
      type: "NOOP"
    };
  };
}
