import css from "styled-components";
import React from "react";

const ImageEl = css.img`
  width: 100%;
`;

const Image = (props) => <ImageEl {...props} />;

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
