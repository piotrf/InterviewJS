import css from "styled-components";
import React from "react";
import { string } from "prop-types";
import { Tooltip } from "react-tippy";

import { color, radius, setType } from "../../../utils";

const LegendWrapper = css.legend`
  display: inline-block;
`;

const Tip = css.div`
  background-color: ${color.blueBlk};
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
    <Tooltip
      animation="fade"
      arrow
      arrowSize="small"
      hideDelay={350}
      interactiveBorder={5}
      position="bottom"
      sticky
      theme="dark"
      title={props.tip}
      trigger="click"
    >
      <LegendBody>i</LegendBody>
    </Tooltip>
  </LegendWrapper>
);

Legend.propTypes = {
  tip: string.isRequired
};

Legend.defaultProps = {};

export default Legend;
