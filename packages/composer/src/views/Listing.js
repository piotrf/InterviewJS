import React from "react";
import { arrayOf, object, shape, string } from "prop-types";

import {
  Action,
  Container,
  Stories,
  Story,
  UserMenu
} from "interviewjs-styleguide";

import { Page, PageBody, PageHead, PageTitle } from "../components";

const Listing = props => (
  <Page>
    <PageHead dir="row" flex={[0, 0, "60px"]}>
      <Container flex={[0, 1, `${100 / 3}%`]}>
        <UserMenu data={props.user} />
      </Container>
      <Container flex={[1, 0, `${100 / 3}%`]} align="center">
        <PageTitle typo="h1">Your Stories</PageTitle>
      </Container>
      <Container flex={[0, 1, `${100 / 3}%`]} align="right">
        <Action primary onClick={() => console.log("launch wizard")}>
          Create new
        </Action>
      </Container>
    </PageHead>
    <PageBody>
      <Container limit>
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
    </PageBody>
  </Page>
);

Listing.propTypes = {
  stories: arrayOf(object),
  user: shape({
    name: string,
    id: string,
    avatar: string
  })
};

Listing.defaultProps = {
  stories: []
};

export default Listing;
