import React from "react";
import { Link } from "react-router";

const Listing = props => (
  <div>
    {props.stories.map((story, i) => (
      <div key={i} i={i}>
        <Link to={`/stories/${story.id}`}>{story.title}</Link>
      </div>
    ))}
  </div>
);

export default Listing;
