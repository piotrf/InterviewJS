import { func } from "prop-types";
import css from "styled-components";

const BubbleBlock = css.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

BubbleBlock.propTypes = {
  callback: func
};

BubbleBlock.defaultProps = {
  callback: null
};

export default BubbleBlock;
