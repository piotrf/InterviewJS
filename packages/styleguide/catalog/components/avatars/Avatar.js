import css from "styled-components";
import { node, string } from "prop-types";

import { radius, setSize } from "../../../utils";

const Avatar = css.div`
  ${({ size }) => setSize(size)};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  border-radius: ${radius.a};
`;

Avatar.propTypes = {
  size: string,
  image: node.isRequired
};

Avatar.defaultProps = {
  size: "m"
};

export default Avatar;
