/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Actionbar,
  Action,
  Avatar,
  Container,
  color,
  setSpace
} from "interviewjs-styleguide";

import {} from "../partials";

const Page = css.div`
  background: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = css(Container)`
  border-bottom: 1px solid ${color.greyHL};
`;

const PageBody = css(Container)`
`;

const PageFoot = css(Container)`
`;

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { story } = this.props;
    return (
      <Page>
        <PageHead flex={[0, 0, `auto`]} padded>
          <Actionbar satellite="both">
            <Action iconic>…</Action>
            <Action>
              <Avatar image={story.avatar} />
            </Action>
            <Action iconic>:)</Action>
          </Actionbar>
        </PageHead>
        <PageBody flex={[1, 1, `100%`]} />
        <PageFoot flex={[0, 0, `auto`]} padded>
          <Actionbar satellite="both">
            <Action iconic secondary>
              …
            </Action>
            <Action primary>Move on</Action>
            <Action iconic secondary>
              :)
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    );
  }
}

ChatView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ChatView.defaultProps = {
  router: null,
  story: {}
};
