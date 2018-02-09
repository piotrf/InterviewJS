import React from "react";

import { Container } from "interviewjs-styleguide";

const Composer = props => {
  const { storyId } = props.params;
  const i = props.stories.findIndex(story => story.id === storyId);
  const story = props.stories[i];
  console.log(props);
  return <Container>{story.title}</Container>;
};

export default Composer;
