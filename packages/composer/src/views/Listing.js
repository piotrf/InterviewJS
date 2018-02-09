import React from "react";
import { arrayOf, object } from "prop-types";

import { Container, Stories, Story } from "interviewjs-styleguide";

const Listing = props => (
  <Container fill="grey">
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
