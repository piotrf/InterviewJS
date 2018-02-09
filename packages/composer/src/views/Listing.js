import React from "react";
import { arrayOf, object } from "prop-types";

import {
  Action,
  Container,
  Stories,
  Story,
  Text
} from "interviewjs-styleguide";

const PageTitle = Text.withComponent("h1");

const Listing = props => (
  <Container limit>
    <Container dir="row" padded>
      <Container flex={[0, 0, `${100 / 3}%`]}>Els</Container>
      <Container flex={[0, 0, `${100 / 3}%`]} align="center">
        <PageTitle typo="h1">Your stories</PageTitle>
      </Container>
      <Container flex={[0, 0, `${100 / 3}%`]} align="right">
        <Action primary onClick={() => console.log("launch wizard")}>
          Create new
        </Action>
      </Container>
    </Container>
    <Stories>
      {props.stories.map((story, i) => (
        <Story
          key={story.id}
          i={i}
          data={story}
          onClick={() => props.router.push(`stories/${story.id}`)}
        />
      ))}
    </Stories>
  </Container>
);

Listing.propTypes = {
  stories: arrayOf(object)
};

Listing.defaultProps = {
  stories: []
};

export default Listing;
