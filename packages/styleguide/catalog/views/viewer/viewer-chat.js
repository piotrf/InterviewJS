import React from "react";
import css from "styled-components";
import {} from "prop-types";

import {
  Avatar,
  Bubble,
  BubbleAvatar,
  BubbleGroup,
  Bubbles,
  Container
} from "../../components";

import Sample from "../../static/avatar.png";

export const ChatHead = css(Container)`
  flex: 0 0 60px;
`;

export const ChatBody = css(Container)`
  flex: 1 0 0%;
  justify-content: flex-end;
  overflow-y: auto;
`;

export const ChatFoot = css(Container)`
  flex: 0 0 60px;
`;

const ViewerIntro = () => (
  <Container cover limit fill="white" flex="column">
    <ChatHead fill="grey" padded>
      Head
    </ChatHead>
    <ChatBody flex="column">
      <BubbleGroup>
        <BubbleAvatar>
          <Avatar size="x" image={Sample} />
        </BubbleAvatar>
        <Bubbles persona="speaker">
          <Bubble persona="speaker">Bubble from the left</Bubble>
          <Bubble persona="speaker">Another bubble from the left</Bubble>
        </Bubbles>
      </BubbleGroup>
      <BubbleGroup>
        <Bubbles persona="system">
          <Bubble persona="system">Bubble in the middle</Bubble>
          <Bubble persona="system">Another bubble in the middle</Bubble>
        </Bubbles>
      </BubbleGroup>
      <BubbleGroup>
        <Bubbles persona="user">
          <Bubble persona="user">Bubble from the right</Bubble>
          <Bubble persona="user">Another bubble from the right</Bubble>
        </Bubbles>
      </BubbleGroup>
    </ChatBody>
    <ChatFoot fill="white" padded>
      Foot
    </ChatFoot>
  </Container>
);

export default ViewerIntro;
