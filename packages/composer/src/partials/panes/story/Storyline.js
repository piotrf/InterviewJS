import { arrayOf, func, object, number } from "prop-types";
import css from "styled-components";
import React from "react";

import {
  Action,
  Bubble,
  BubbleGroup,
  Bubbles,
  Icon,
  Separator,
  color,
  radius,
  setSpace,
  skin
} from "interviewjs-styleguide";

const BubbleEdit = css.div`
  ${setSpace("pax")};
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ persona }) =>
    persona === "user"
      ? `
    left: 100%;
  `
      : `
    right: 100%;
  `}
`;
const StorylineEl = css.div`
  ${setSpace("phl")};
  ${setSpace("ptm")};
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  overflow-y: auto;
  & > * {
    ${setSpace("mvm")};
  }
  & > * > *:first-child,
  & > * > *:first-child * {
    cursor: move !important;
  }
  & > *:first-child {
    ${setSpace("mtm")};
  }
  & > *:last-child {
    ${setSpace("mbl")};
  }
  & .BubblePlaceholder {
    background: ${color.greyWt};
    background: ${color.white};
    border-radius: ${radius.a};
    border: 1px dashed ${color.greyM};
    min-height: 40px;
  }
  & > *:hover {
   ${BubbleEdit} {
     display: block;
   }
  }
`;

const placeholder = document.createElement("div");
placeholder.className = "BubblePlaceholder";

export default class Storyline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dragEnd = this.dragEnd.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    setTimeout(this.scrollToBottom, 300);
  }
  componentDidUpdate() {
    setTimeout(this.scrollToBottom, 150);
  }
  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.dragged);
  }
  dragEnd() {
    const { currentInterviewee, storyIndex } = this.props;
    const from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (
      Number.isInteger(from) &&
      Number.isInteger(to) &&
      this.over.dataset.droppable !== undefined
    ) {
      this.dragged.style.display = "block";
      this.dragged.parentNode.removeChild(placeholder);
      const payload = { from, to };
      this.props.moveStorylineItem(storyIndex, currentInterviewee, payload);
    }
    return null;
  }
  dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.dragged.style.display = "none";
    if (e.target.className === "BubblePlaceholder") return;
    function findDroppableParent(el) {
      while ((el = el.parentElement) && !el.dataset.droppable);
      return el;
    }
    const droppableParent = findDroppableParent(e.target);
    if (droppableParent !== null) {
      this.over = droppableParent;
      droppableParent.parentNode.insertBefore(placeholder, droppableParent);
    }
  }
  scrollToBottom() {
    this.anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end"
    });
  }
  render() {
    const { storyline } = this.props;
    return (
      <StorylineEl onDragOver={(e) => this.dragOver(e)}>
        {Object.keys(storyline).map((storyItem, i) => {
          const { role, content, type } = storyline[storyItem];
          const getContent = () => {
            if (role === "user") {
              return (
                <Bubble persona={role} theme={{ backg: skin.speakerBackg }}>
                  {content[0].enabled ? (
                    <Action tone="negative">{content[0].value}</Action>
                  ) : null}
                  {content[0].enabled && content[1].enabled ? (
                    <Separator dir="v" size="m" />
                  ) : null}
                  {content[1].enabled ? (
                    <Action tone="positive">{content[1].value}</Action>
                  ) : null}
                </Bubble>
              );
            }
            if (role === "interviewee") {
              if (type === "text") {
                return <Bubble persona={role}>{content}</Bubble>;
              } else if (type === "link") {
                return (
                  <Bubble persona={role}>
                    <a href={content.value} target="_blank">
                      {content.title ? content.title : content.value}
                    </a>
                  </Bubble>
                );
              }
            }
            return null;
          };
          return (
            <BubbleGroup
              data-droppable
              data-id={i}
              draggable
              key={storyItem}
              onDragEnd={(e) => this.dragEnd(e)}
              onDragStart={(e) => this.dragStart(e)}
            >
              <Bubbles persona={role}>{getContent()}</Bubbles>
              <BubbleEdit persona={role}>
                <Action iconic onClick={() => this.props.toggleBubbleEdit(i)}>
                  <Icon name="pen" size="x" />
                </Action>
              </BubbleEdit>
            </BubbleGroup>
          );
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
  currentInterviewee: number.isRequired,
  moveStorylineItem: func.isRequired,
  storyIndex: number.isRequired,
  storyline: arrayOf(object),
  toggleBubbleEdit: func.isRequired
};

Storyline.defaultProps = {
  storyline: []
};
