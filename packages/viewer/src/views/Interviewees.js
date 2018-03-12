/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Icon,
  PageTitle,
  Tip,
  color,
  setSpace
} from "interviewjs-styleguide";

import { Cover, Topbar } from "../partials";

const Page = css.div`
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = css(Container)`
  ${setSpace("pbl")};
  width: 100%;
`;

const PageBody = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
  width: 100%;
`;

const PageFoot = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
`;

const Interviewees = css.ul`
  display: block;
  width: 100%;
`;

const Interviewee = css.li`
  ${setSpace("pvm")};
  border-bottom: 1px solid ${color.flareHL};
  display: block;
  & button {
    ${setSpace("mls")};
  }
  ${Avatar} {
    ${setSpace("mrm")};
  }
`;

export default class ContextView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { story } = this.props;
    return [
      <Topbar
        handleDetails={() => this.props.router.push(`/details`)}
        handleBack={() => this.props.router.push(`/context`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead limit="m" flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover}>
            <PageTitle typo="h1">{story.title}</PageTitle>
          </Cover>
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <Interviewees>
              {story.interviewees.map((interviewee, i) => (
                <Interviewee key={interviewee.id}>
                  <Container dir="row">
                    <Container flex={[1, 0, "auto"]}>
                      <Avatar
                        size="l"
                        image={interviewee.avatar}
                        onClick={() =>
                          this.props.router.push(`/chat/${interviewee.id}`)
                        }
                      />
                    </Container>
                    <Container flex={[0, 1, "100%"]} align="left">
                      {interviewee.name}
                    </Container>
                    <Container flex={[1, 0, "auto"]}>
                      <Tip title="Get info">
                        <Action inverted iconic>
                          <Icon name="info" />
                        </Action>
                      </Tip>
                      <Tip title="Start chatting">
                        <Action
                          primary
                          iconic
                          onClick={() =>
                            this.props.router.push(`/chat/${interviewee.id}`)
                          }
                        >
                          <Icon name="bubbles" />
                        </Action>
                      </Tip>
                    </Container>
                  </Container>
                </Interviewee>
              ))}
            </Interviewees>
          </Container>
        </PageBody>
        <PageFoot limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Actionbar>
            <Action
              fixed
              onClick={() =>
                this.props.router.push(`/chat/${story.interviewees[0].id}`)
              }
              primary
            >
              Start your first interview
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    ];
  }
}

ContextView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ContextView.defaultProps = {
  router: null,
  story: {}
};
