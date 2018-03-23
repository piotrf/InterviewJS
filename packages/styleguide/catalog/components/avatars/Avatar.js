import css from "styled-components";
import { node, oneOfType, string } from "prop-types";

import { color, radius, setSize } from "../../../utils";

const Avatar = css.div`
  ${({ size }) => setSize(size)};
  background-color: ${color.greyHL};
  background-position: center;
  background-size: cover;
  border-radius: ${radius.a};
  display: inline-block;
  ${({ image }) =>
    image !== null || image !== ""
      ? `
    background-image: url(${image});
  `
      : ``};
`;

Avatar.propTypes = {
  size: string,
  image: oneOfType([node, string])
};

Avatar.defaultProps = {
  size: "m",
  image: null
};

export default Avatar;
