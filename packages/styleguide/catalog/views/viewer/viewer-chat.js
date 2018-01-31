import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { color } from "../../../utils";

import {
  Action,
  Actionbar,
  Avatar,
  Bubble,
  BubbleAvatar,
  BubbleGroup,
  Bubbles,
  Container,
  Icon
} from "../../components";

import Sample from "../../static/avatar.png";

export const ChatHead = css(Container)`
  flex: 0 0 0;
  border-bottom: 1px solid ${color.greyLt};
`;

export const ChatBody = css(Container)`
  flex: 1 0 0%;
  justify-content: flex-end;
  overflow-y: auto;
`;

export const ChatFoot = css(Container)`
  flex: 0 0 50px;
`;

const ViewerIntro = () => (
  <Container cover limit fill="white" flex="column">
    <ChatHead fill="grey" padded>
      <Container flex="row">
        <Container basis={5} align="left">
          <Action iconic onClick={evt => console.log(evt)}>
            <Icon name="question-circle" />
          </Action>
        </Container>
        <Container basis={1.666666667} align="center">
          <Action onClick={evt => console.log(evt)}>Barack Obama</Action>
        </Container>
        <Container basis={5} align="right">
          <Action iconic onClick={evt => console.log(evt)}>
            <Icon name="question-circle" />
          </Action>
        </Container>
      </Container>
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
      <Actionbar satellite="both">
        <Action secondary iconic onClick={evt => console.log(evt)}>
          <Icon name="chevron-right" />
        </Action>
        <Action fixed primary onClick={evt => console.log(evt)}>
          An action
        </Action>
        <Action fixed primary onClick={evt => console.log(evt)}>
          Another action
        </Action>
        <Action secondary iconic onClick={evt => console.log(evt)}>
          <Icon name="emo-smiley" />
        </Action>
      </Actionbar>
    </ChatFoot>
  </Container>
);

export default ViewerIntro;
