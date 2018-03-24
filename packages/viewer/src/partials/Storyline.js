/* eslint react/no-danger: 0 */
import { arrayOf, string, object, shape } from "prop-types";
import css from "styled-components";
import React, { Component } from "react";
import { withRouter } from "react-router";

import {
  Action,
  Avatar,
  Bubble,
  BubbleBlock,
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
  & > *:last-child {
    margin-bottom: 0;
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
    this.state = {
      replayCachedHistory: true
    };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    setTimeout(() => this.scrollToBottom("instant"), 0);
    setTimeout(() => this.scrollToBottom("instant"), 300);
    setTimeout(() => this.scrollToBottom("instant"), 400);
    this.setState({ replayCachedHistory: false });
  }
  componentDidUpdate() {
    setTimeout(() => this.scrollToBottom(), 0);
    setTimeout(() => this.scrollToBottom(), 350);
    setTimeout(() => this.scrollToBottom(), 700);
    setTimeout(() => this.scrollToBottom(), 1050);
  }
  scrollToBottom(behaviour) {
    return this.anchor
      ? this.anchor.scrollIntoView({
          behavior: behaviour || "smooth",
          block: "end",
          inline: "end"
        })
      : null;
  }
  render() {
    const { storyline, history, interviewee, story } = this.props;
    const { replayCachedHistory } = this.state;

    // const animateAndDelay = true;
    const animateAndDelay = !replayCachedHistory;

    const renderIntervieweeBubble = (item, index) => {
      const { content, type } = storyline[item.i];

      const getBubbleContent = () => {
        switch (type) {
          case "text":
            return <p>{content.value}</p>;
          case "image":
            return [
              <img src={content.value} alt={content.title} key="image" />,
              content.title ? <p key="caption">{content.title}</p> : null
            ];
          case "link":
            return (
              <a href={content.value} target="_blank">
                {content.title ? content.title : content.value}
              </a>
            );
          case "embed":
          case "map":
          case "media":
            return <div dangerouslySetInnerHTML={{ __html: content.value }} />;
          default:
            return null;
        }
      };

      const getBubbleDisplayType = () => {
        const isEmbed = ["embed", "media", "map"].includes(type);
        const isImage = type === "image";
        if (isEmbed) {
          return "embed";
        } else if (isImage) {
          return "rich";
        }
        return "plain";
      };

      return (
        <BubbleBlock key={index} persona="interviewee">
          <Bubble
            animated={animateAndDelay}
            delay={animateAndDelay ? 350 : null}
            displayType={getBubbleDisplayType()}
            loading={animateAndDelay}
            persona="interviewee"
            theme={{ backg: interviewee.color }}
          >
            {getBubbleContent()}
          </Bubble>
        </BubbleBlock>
      );
    };

    const renderUserBubble = (item, index) => {
      const { type } = item;

      const getBubbleContent = () => {
        if (type === "ignore" || type === "explore") {
          const { i } = item;
          const { content } = storyline[i];
          const filterByType = () =>
            content.findIndex((contentEl) => contentEl.type === type);
          return content[filterByType()].value;
        } else if (type === "diss") {
          return item.value;
        } else if (type === "emoji") {
          return <Icon name={item.value} />;
        }
        return null;
      };

      return (
        <BubbleBlock key={index} persona="user">
          <Bubble persona="user">{getBubbleContent()}</Bubble>
        </BubbleBlock>
      );
    };

    return (
      <StorylineEl limit="m">
        <Push />
        {history.length > 0
          ? history.map((item, index) => {
              const { role } = item;
              if (role === "interviewee") {
                return renderIntervieweeBubble(item, index);
              } else if (role === "user") {
                return renderUserBubble(item, index);
              } else if (role === "system") {
                return <div>system</div>;
              }
              return null;
            })
          : // history.map((item, index) => {
            //     const { role } = item;
            //     if (role === "system") {
            //       const { type } = item;
            //       if (type === "switchTo") {
            //         return (
            //           <BubbleGroup key={index}>
            //             <Bubbles persona="system">
            //               <Bubble persona="system">
            //                 Choose another interviewee to talk to:
            //               </Bubble>
            //               {story.interviewees.map(
            //                 (character, i) =>
            //                   character.id !== this.props.currentIntervieweeId ? (
            //                     <Bubble
            //                       key={character.name}
            //                       persona="system"
            //                       onClick={() =>
            //                         this.props.switchChat(character.id)
            //                       }
            //                     >
            //                       <Avatar image={character.avatar} size="s" />
            //                       <Separator dir="v" size="x" silent />
            //                       <Action
            //                         onClick={() =>
            //                           this.props.switchChat(character.id)
            //                         }
            //                       >
            //                         {character.name}
            //                       </Action>
            //                     </Bubble>
            //                   ) : null
            //               )}
            //             </Bubbles>
            //           </BubbleGroup>
            //         );
            //       }
            //       return null;
            //     }
            null}
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
  interviewee: shape({
    color: string.isRequired
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
