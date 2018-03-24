import { string } from "prop-types";
import css from "styled-components";

const BubbleBlock = css.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  min-width: 100%;

  /* align bubbles depending on the persona */

  justify-content: ${({ persona }) => {
    if (persona === "user") {
      return `flex-end`;
    } else if (persona === "interviewee") {
      return `flex-start`;
    }
    return `center`;
  }};
  
`;

BubbleBlock.propTypes = {
  persona: string
};

BubbleBlock.defaultProps = {
  persona: null
};

export default BubbleBlock;
