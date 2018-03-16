/* eslint react/no-danger: 0 */
import { arrayOf, object } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";

import {
  Bubble,
  BubbleGroup,
  Bubbles,
  Container,
  Separator,
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
  componentDidUpdate(prevProps) {
    if (this.props.currentItem < this.props.storyline.length) {
      if (
        this.props.interviewee.storyline[this.props.currentItem].role === "user"
      ) {
        if (prevProps.currentItem < this.props.currentItem) {
          setTimeout(this.scrollToBottom, 0);
        }
      }
      if (prevProps.currentItem < this.props.currentItem) {
        setTimeout(this.scrollToBottom, 400);
      }
    }
  }
  scrollToBottom() {
    this.anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end"
    });
    setTimeout(
      // run second time to scroll to iframes that take time to load
      () =>
        this.anchor.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end"
        }),
      1000
    );
  }
  render() {
    const { storyline } = this.props.interviewee;
    const { interviewee } = this.props;
    const renderUserBubble = (data) => {
      const { content, role } = data;
      return (
        <Bubble persona={role}>
          {content[0].enabled ? content[0].value : null}
          {content[0].enabled && content[1].enabled ? (
            <Separator dir="v" size="m" />
          ) : null}
          {content[1].enabled ? content[1].value : null}
        </Bubble>
      );
    };
    const renderIntervieweeBubble = (data) => {
      const { content, type, role } = data;
      if (type === "text") {
        return (
          <Bubble
            persona={role}
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
            persona={role}
            type="plain"
            theme={{ backg: interviewee.color }}
            animated
            delay={350}
          >
            <a href={content.value} target="_blank">
              {content.title ? content.title : content.value}
            </a>
          </Bubble>
        );
      } else if (type === "image") {
        return (
          <Bubble
            persona={role}
            type="rich"
            theme={{ backg: interviewee.color }}
            animated
            delay={350}
          >
            <img src={content.value} alt="" />
          </Bubble>
        );
      } else if (type === "embed") {
        return (
          <Bubble
            persona={role}
            type="embed"
            theme={{ backg: interviewee.color }}
            animated
            delay={350}
          >
            <div dangerouslySetInnerHTML={{ __html: content.value }} />
          </Bubble>
        );
      } else if (type === "map") {
        return (
          <Bubble
            persona={role}
            type="embed"
            theme={{ backg: interviewee.color }}
            animated
            delay={350}
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
        {Object.keys(storyline).map((storyItem, i) => {
          const { role } = storyline[storyItem];
          const item = storyline[storyItem];
          if (i <= this.props.currentItem) {
            return (
              <BubbleGroup key={storyItem} callback={this.props.onBubbleRender}>
                <Bubbles persona={role}>
                  {role === "user"
                    ? renderUserBubble(item)
                    : renderIntervieweeBubble(item)}
                </Bubbles>
              </BubbleGroup>
            );
          }
          return null;
        })}
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
  storyline: arrayOf(object)
};

Storyline.defaultProps = {
  storyline: []
};
