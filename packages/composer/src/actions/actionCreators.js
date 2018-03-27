import Raven from "raven-js";
import { Storage } from "aws-amplify";
import axios from "axios";
import shortUuid from "short-uuid";
import { base } from "../configureStore";

const uuidv4 = () => shortUuid().fromUUID(shortUuid.uuid());

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
      id: `iv_${uuidv4()}`,
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
      id: `s0_${uuidv4()}`,
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

export function syncAndSaveStory(payload) {
  return {
    type: "SYNC_AND_SAVE_STORY",
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
      id: `iv_${uuidv4()}`,
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
    id: `sl_${uuidv4()}`,
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
                .then(response => {
                  console.log('AWS', response.data);
                  dispatch(syncStory(response.data));
                })
                .catch(error => Raven.captureException(error));
            })
            .catch(error => Raven.captureException(error));
        });

        // migrate
        const migrationMap = {
          "omran.1994@gmail.com": "4gvGewnBKvaBd2nEJzwRBkCCJA92",
          "robin.kwong@gmail.com": "9L6e5VyswdT9fv9ZCyMUsk9UjcS2",
          "ayilah@gmail.com": "PCkH3ueyDpXQlA7RMY5spnBvCe63",
          "ayilahchaudhary2020@u.northwestern.edu": "RsBJYu7btkWGtks05NO1jr0vIsy2",
          "joana.bogusz@gmail.com": "VLCWoOOhJ6fzU2sHfWYZ91BydBC3",
          "hello@piotrf.pl": "ZWiXj1RmQwbT7dOVG8kt3VeDkyH2",
          "jueunchoinuq@gmail.com": "dNtUyPyKNuVAQBoQy9oLoSYkoYM2",
          "ashultes92@gmail.com": "eqR6K2ORzwXNDpXamFY6HJLJEoj2",
          "noora.shalaby@gmail.com": "ftInNHeg9lbEnE6xFSl6XWgJJjF2",
          "haddadme@gmail.com": "jMi2IvAmWFV9DZBrIfWWUrlTEw62",
          "dev@piotrf.pl": "k7038PtYuuS592n2dYVonOgOGYt1",
          "morrison.gi@gmail.com": "lHIDyIUPdJNgeVseGI0T1BqtYB93",
          "juliana.ruhfus77@gmail.com": "rAYYRoNbntXtxZLJ3gG2zS6FFYY2",
          "laurian@gmail.com": "ui8Ju9ZE6NTeXSmgYYbba70axKn1",
          "alilouiserae@gmail.com": "yBIVwQEF1xdUewTa1CwM3bmWalU2"
        };
        const uid = migrationMap["laurian@gmail.com"];
        if (uid) {
          base
            .fetch(`stories-alpha/${uid}/`, {
              asArray: true
            })
            .then((data) => {
              // console.log(data);
              data.forEach((story) => {
                console.log('FIREBASE', story);
                dispatch(syncAndSaveStory(story));
              });
            })
            .catch(error => Raven.captureException(error));
          }
        // migrate
      })
    .catch(error => Raven.captureException(error));

    return {
      type: "NOOP"
    };
  };
}
