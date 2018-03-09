import css from "styled-components";
import React from "react";
import { string } from "prop-types";

import { Tip } from "../";
import { color, radius, setType } from "../../../utils";

const LegendWrapper = css.legend`
  display: inline-block;
`;

const LegendBody = css.span`
  ${setType("x")};
  background-color: ${color.white};
  border-radius: ${radius.a};
  border: 1px solid ${color.greyLt};
  color: ${color.greyM};
  cursor: pointer;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
`;

const Legend = props => (
  <LegendWrapper {...props}>
    <Tip position="bottom" title={props.tip} trigger="click">
      <LegendBody>i</LegendBody>
    </Tip>
  </LegendWrapper>
);

Legend.propTypes = {
  tip: string.isRequired
};

Legend.defaultProps = {};

export default Legend;
