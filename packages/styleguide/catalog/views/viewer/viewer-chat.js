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

import SampleAvatar from "../../static/avatar.png";

export const Layout = css.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
`;

export const ChatHead = css(Container)`
  flex: 0 0 0;
  border-bottom: 1px solid ${color.greyLt};
`;

export const ChatBody = css(Container)`
  flex: 1 0 0;
  justify-content: flex-end;
  overflow-y: auto;
`;

export const ChatFoot = css(Container)`
  flex: 0 0 0;
`;

export default class ViewerChat extends React.Component {
  constructor() {
    super();
    this.state = { pageHeight: null };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    /*
      don’t do this, this is just for documentation purpouse
      as responsive Catalog specimens are wrapped in iframes:
    */
    const windowHeight = document.getElementsByTagName("iframe")[0]
      .contentWindow.document.body.clientHeight; // see comment above
    return this.setState({
      pageHeight: windowHeight
    });
  }
  render() {
    return (
      <Layout
        {...this.props}
        pageHeight={this.state.pageHeight}
        style={{
          minHeight: this.state.pageHeight
        }}
      >
        <ChatHead fill="grey" padded>
          <Container>
            <Actionbar satellite="both">
              <Action iconic onClick={evt => console.log(evt)}>
                <Icon name="chevron-left" />
              </Action>
              <Action onClick={evt => console.log(evt)}>Barack Obama</Action>
              <Action iconic onClick={evt => console.log(evt)}>
                <Icon name="question-circle" />
              </Action>
            </Actionbar>
          </Container>
        </ChatHead>
        <ChatBody dir="column">
          <BubbleGroup>
            <BubbleAvatar>
              <Avatar size="s" image={SampleAvatar} />
            </BubbleAvatar>
            <Bubbles persona="speaker">
              <Bubble persona="speaker">Bubble from the left</Bubble>
              <Bubble persona="speaker">Another bubble from the left</Bubble>
            </Bubbles>
          </BubbleGroup>
          <BubbleGroup>
            <Bubbles persona="user">
              <Bubble persona="user">I want to talk to somebody else</Bubble>
            </Bubbles>
          </BubbleGroup>
          <BubbleGroup>
            <Bubbles persona="system">
              <Bubble persona="system">
                <Container dir="row">
                  <Container flex={[0, 0, `36px`]}>
                    <Avatar size="m" image={SampleAvatar} />
                  </Container>
                  <Container flex={[1, 0, 0]}>Bubble in the middle</Container>
                  <Container flex={[0, 0, `100px`]} align="right">
                    <Action iconic theme={{ mainColor: color.greyM }}>
                      <Icon name="chevron-right" />
                    </Action>
                  </Container>
                </Container>
              </Bubble>
              <Bubble persona="system">
                <Container dir="row">
                  <Container flex={[0, 0, `36px`]}>
                    <Avatar size="m" image={SampleAvatar} />
                  </Container>
                  <Container flex={[1, 0, 0]}>Bubble in the middle</Container>
                  <Container flex={[0, 0, `100px`]} align="right">
                    <Action iconic theme={{ mainColor: color.greyM }}>
                      <Icon name="chevron-right" />
                    </Action>
                  </Container>
                </Container>
              </Bubble>
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
          <Actionbar limit satellite="both">
            <Action secondary iconic onClick={evt => console.log(evt)}>
              <Icon name="chevron-right" />
            </Action>
            <Action fixed primary onClick={evt => console.log(evt)}>
              An action that can be lengthy
            </Action>
            <Action fixed primary onClick={evt => console.log(evt)}>
              Another action
            </Action>
            <Action secondary iconic onClick={evt => console.log(evt)}>
              <Icon name="emo-smiley" />
            </Action>
          </Actionbar>
        </ChatFoot>
      </Layout>
    );
  }
}
