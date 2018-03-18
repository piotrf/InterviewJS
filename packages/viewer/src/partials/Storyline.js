/* eslint react/no-danger: 0 */
import { array, arrayOf, func, object, shape } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";

import {
  Bubble,
  BubbleGroup,
  Bubbles,
  Container,
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

export default class Storyline extends Component {
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
    const { storyline, history, interviewee } = this.props;
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
              if (role === "user") {
                const { type } = item;
                if (type === "emoji") {
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
  storyline: arrayOf(object)
};

Storyline.defaultProps = {
  history: [],
  storyline: []
};
