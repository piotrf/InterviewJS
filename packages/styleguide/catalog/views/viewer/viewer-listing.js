import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { color } from "../../../utils";

import {
  Action,
  Actionbar,
  Avatar,
  List,
  ListItem,
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
            <Actionbar satellite="left">
              <Action iconic onClick={evt => console.log(evt)}>
                <Icon name="chevron-left" />
              </Action>
              <Action>Interviewees</Action>
            </Actionbar>
          </Container>
        </ChatHead>
        <ChatBody dir="column-reverse">
          <List>
            <ListItem>
              <Container dir="row">
                <Container flex={["0", "0", "60px"]}>
                  <Avatar image={SampleAvatar} size="l" />
                </Container>
                <Container flex={["1", "0", 0]}>Name and surname</Container>
                <Container flex={["0", "0", "80px"]}>
                  <Actionbar limit>
                    <Action secondary iconic>
                      <Icon name="info-circle" />
                    </Action>
                    <Action primary iconic>
                      <Icon name="info-circle" />
                    </Action>
                  </Actionbar>
                </Container>
              </Container>
            </ListItem>
            <ListItem>
              <Container dir="row">
                <Container flex={["0", "0", "60px"]}>
                  <Avatar image={SampleAvatar} size="l" />
                </Container>
                <Container flex={["1", "0", 0]}>Name and surname</Container>
                <Container flex={["0", "0", "80px"]}>
                  <Actionbar limit>
                    <Action secondary iconic>
                      <Icon name="info-circle" />
                    </Action>
                    <Action primary iconic>
                      <Icon name="info-circle" />
                    </Action>
                  </Actionbar>
                </Container>
              </Container>
            </ListItem>
          </List>
        </ChatBody>
      </Layout>
    );
  }
}
