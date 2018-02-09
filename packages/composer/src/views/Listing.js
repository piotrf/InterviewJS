import React from "react";
import css from "styled-components";
import { arrayOf, object, shape, string } from "prop-types";

import {
  Action,
  Avatar,
  Container,
  Separator,
  Stories,
  Story,
  Text,
  setSpace
} from "interviewjs-styleguide";

const PageTitle = Text.withComponent("h1");
const PageHead = css(Container)`
  ${setSpace("pvs")};
  ${setSpace("phm")};
`;

const Listing = props => (
  <Container>
    {console.log(props)}
    <PageHead dir="row" flex={[0, 0, "60px"]}>
      <Container flex={[0, 1, `${100 / 3}%`]}>
        <Avatar image={props.user.avatar} /> {props.user.name}
      </Container>
      <Container flex={[1, 0, `${100 / 3}%`]} align="center">
        <PageTitle typo="h1" unwrap>
          Your Stories
        </PageTitle>
      </Container>
      <Container flex={[0, 1, `${100 / 3}%`]} align="right">
        <Action primary onClick={() => console.log("launch wizard")}>
          Create new
        </Action>
      </Container>
    </PageHead>
    <Separator size="l" effect="silent" />
    <Container padded limit>
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
  </Container>
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
