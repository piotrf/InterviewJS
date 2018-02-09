import React from "react";
import { Link } from "react-router";
import { withRouter } from "react-router-dom";

import { Container, Stories, Story } from "interviewjs-styleguide";

const Listing = props => (
  <Container fill="grey">
    <Stories>
      {props.stories.map((story, i) => (
        <Story key={i} i={i} data={story} onClick={() => console.log(story)} />
      ))}
    </Stories>
  </Container>
);

export default Listing;
