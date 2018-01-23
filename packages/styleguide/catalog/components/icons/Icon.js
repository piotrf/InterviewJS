import css from "styled-components";
import React from "react";
import { string } from "prop-types";

import { font } from "../../../utils";

require("./iconfont/style.css");

const IconEl = css.i`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ${font.ico};
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  speak: none;
  text-transform: none;
`;

const Icon = props => <IconEl className={`icon-${props.name} `} />;

Icon.propTypes = {
  name: string.isRequired
};

Icon.defaultProps = {};

export default Icon;
