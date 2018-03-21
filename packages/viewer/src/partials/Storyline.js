/* eslint react/no-danger: 0 */
import { array, arrayOf, func, object, shape } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";
import { withRouter } from "react-router";

import {
  Action,
  Avatar,
  Bubble,
  BubbleGroup,
  Bubbles,
  Container,
  Separator,
  Icon,
  color,
  setSpace
} from "interviewjs-styleguide";

const StorylineEl = css(Container)`
  ${setSpace("phl")};
  border-left: 1px solid ${color.greyHL};
  border-right: 1px solid ${color.greyHL};
  bottom: 0;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
  & > * {
    ${setSpace("mvm")};
  }
`;

const Push = css.div`
  height: calc(100% - 80px);
  margin: 0;
  padding: 0;
`;

class Storyline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    setTimeout(this.scrollToBottom, 300);
  }
  componentDidUpdate() {
    setTimeout(this.scrollToBottom, 0);
    setTimeout(this.scrollToBottom, 350);
    setTimeout(this.scrollToBottom, 700);
    setTimeout(this.scrollToBottom, 1050);
    setTimeout(this.scrollToBottom, 1400);
  }
  scrollToBottom() {
    return this.anchor
      ? this.anchor.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end"
        })
      : null;
  }
  render() {
    const { storyline, history, interviewee, story } = this.props;

    const renderIntervieweeBubble = (data) => {
      const { content, type } = data;
      if (type === "text") {
        return (
          <Bubble
            persona="interviewee"
            type="plain"
            theme={{ backg: interviewee.color }}
            animated
            delay={350}
          >
            {content.value}
          </Bubble>
        );
      } else if (type === "link") {
        return (
          <Bubble
            animated
            delay={350}
            persona="interviewee"
            theme={{ backg: interviewee.color }}
            type="plain"
          >
            <a href={content.value} target="_blank">
              {content.title ? content.title : content.value}
            </a>
          </Bubble>
        );
      } else if (type === "image") {
        return (
          <Bubble
            animated
            delay={350}
            persona="interviewee"
            theme={{ backg: interviewee.color }}
            type="rich"
          >
            <img src={content.value} alt="" />
          </Bubble>
        );
      } else if (type === "embed") {
        return (
          <Bubble
            animated
            delay={350}
            persona="interviewee"
            theme={{ backg: interviewee.color }}
            type="embed"
          >
            <div dangerouslySetInnerHTML={{ __html: content.value }} />
          </Bubble>
        );
      } else if (type === "map") {
        return (
          <Bubble
            animated
            delay={350}
            persona="interviewee"
            theme={{ backg: interviewee.color }}
            type="embed"
          >
            <div dangerouslySetInnerHTML={{ __html: content.value }} />
          </Bubble>
        );
      }
      return null;
    };

    return (
      <StorylineEl limit="m">
        <Push />
        {history.length > 0
          ? history.map((item, index) => {
              const { role } = item;
              if (role === "system") {
                const { type } = item;
                if (type === "switchTo") {
                  return (
                    <BubbleGroup
                      key={index}
                      callback={this.props.onBubbleRender}
                    >
                      <Bubbles persona="system">
                        <Bubble
                          animated
                          delay={350}
                          key="intro"
                          persona="system"
                        >
                          Choose another interviewee to talk to:
                        </Bubble>
                        {story.interviewees.map((character, i) => (
                          <Bubble
                            animated
                            delay={350 + 350 * (i + 1)}
                            key={character.name}
                            persona="system"
                            onClick={() =>
                              this.props.router.push(
                                `/story/chat/${character.id}`
                              )
                            }
                          >
                            <Avatar image={character.avatar} size="s" />
                            <Separator dir="v" size="x" silent />
                            <Action
                              onClick={() =>
                                this.props.router.push(
                                  `/story/chat/${character.id}`
                                )
                              }
                            >
                              {character.name}
                            </Action>
                          </Bubble>
                        ))}
                      </Bubbles>
                    </BubbleGroup>
                  );
                }
                return null;
              } else if (role === "user") {
                const { type } = item;
                if (type === "nvm") {
                  const { value } = item;
                  return (
                    <BubbleGroup
                      key={index}
                      callback={this.props.onBubbleRender}
                    >
                      <Bubbles persona="user">
                        <Bubble persona="user">{value}</Bubble>
                      </Bubbles>
                    </BubbleGroup>
                  );
                } else if (type === "emoji") {
                  const { value } = item;
                  return (
                    <BubbleGroup
                      key={index}
                      callback={this.props.onBubbleRender}
                    >
                      <Bubbles persona="user">
                        <Bubble persona="user">
                          <Icon name={value} />
                        </Bubble>
                      </Bubbles>
                    </BubbleGroup>
                  );
                } else if (type === "diss") {
                  const { value } = item;
                  return (
                    <BubbleGroup
                      key={index}
                      callback={this.props.onBubbleRender}
                    >
                      <Bubbles persona="user">
                        <Bubble persona="user">{value}</Bubble>
                      </Bubbles>
                    </BubbleGroup>
                  );
                } else if (type === "action") {
                  const { i, value } = item;
                  return (
                    <BubbleGroup
                      key={index}
                      callback={this.props.onBubbleRender}
                    >
                      <Bubbles persona="user">
                        <Bubble persona="user">
                          {storyline[i].content[value].value}
                        </Bubble>
                      </Bubbles>
                    </BubbleGroup>
                  );
                }
                return null;
              }
              const { i } = item;
              return (
                <BubbleGroup key={index} callback={this.props.onBubbleRender}>
                  <Bubbles persona="interviewee">
                    {renderIntervieweeBubble(storyline[i])}
                  </Bubbles>
                </BubbleGroup>
              );
            })
          : null}
        <div
          ref={(el) => {
            this.anchor = el;
          }}
        />
      </StorylineEl>
    );
  }
}

Storyline.propTypes = {
  history: arrayOf(object),
  onBubbleRender: func.isRequired,
  interviewee: shape({
    storyline: array.isRequired
  }).isRequired,
  storyline: arrayOf(object),
  story: shape({
    interviewees: arrayOf(object)
  })
};

Storyline.defaultProps = {
  history: [],
  storyline: [],
  story: {}
};

export default withRouter(Storyline);
