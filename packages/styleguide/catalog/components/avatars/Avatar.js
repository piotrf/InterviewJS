import css from "styled-components";
import { node, string } from "prop-types";

import { color, radius, setSize } from "../../../utils";

const Avatar = css.div`
  ${({ size }) => setSize(size)};
  background-color: ${color.greyHL};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  border-radius: ${radius.a};
  display: inline-block;
`;

Avatar.propTypes = {
  size: string,
  image: node.isRequired
};

Avatar.defaultProps = {
  size: "m"
};

export default Avatar;
