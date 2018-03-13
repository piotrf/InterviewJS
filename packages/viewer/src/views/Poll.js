/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageSubtitle,
  Separator,
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

const PollItem = css(Container)`
  &:not(:last-child) {
    ${setSpace("mbl")};
  }
`;

export default class OutroView extends Component {
  constructor(props) {
    super(props);
    this.state = { formData: {} };
    this.submitPoll = this.submitPoll.bind(this);
  }
  submitPoll() {
    // TODO @LAURIAN
    console.log(`poll results: `, this.state.formData);
    this.props.router.push(`/results`);
  }
  render() {
    const { story } = this.props;
    const { poll } = story;
    return [
      <Topbar
        handleDetails={() => this.props.router.push(`/details`)}
        handleBack={() => this.props.router.push(`/outro`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} />
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            {poll.map((item, i) => (
              <PollItem>
                <PageSubtitle typo="h3">{item.question}</PageSubtitle>
                <Separator silent size="m" />
                <Actionbar>
                  <Action
                    active={this.state.formData[`question${i}`] === 0}
                    fixed
                    inverted
                    onClick={() =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          [`question${i}`]: 0
                        }
                      })
                    }
                  >
                    {item.answer1}
                  </Action>
                  <Action
                    active={this.state.formData[`question${i}`] === 1}
                    fixed
                    inverted
                    onClick={() =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          [`question${i}`]: 1
                        }
                      })
                    }
                  >
                    {item.answer2}
                  </Action>
                </Actionbar>
              </PollItem>
            ))}
          </Container>
        </PageBody>
        <PageFoot limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Actionbar>
            <Action fixed onClick={this.submitPoll} primary>
              Show me results
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    ];
  }
}

OutroView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

OutroView.defaultProps = {
  router: null,
  story: {}
};
