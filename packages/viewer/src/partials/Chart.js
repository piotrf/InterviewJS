import React from "react";
import css from "styled-components";
import { number, string } from "prop-types";

import {
  color,
  radius,
  setSpace,
  setType,
  track
} from "interviewjs-styleguide";

const chartBase = `
  border-radius: ${radius.a};
  height: 3px;
  margin: 0 1px;
  position: relative;
`;

const ChartEl = css.div`
  ${setSpace("mhm")};
`;

const ChartBlock = css.div`
  ${setSpace("mvx")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ChartAnswer = css.div`
  ${setType("x")};
  color: ${color.white};
  letter-spacing: ${track.s};
  text-transform: uppercase;
`;

const ChartNo = css.div`
  ${chartBase};
  background-color: ${color.redM};
  flex-basis: ${({ value }) => value}%;
  & > span {
    color: ${color.redM};
    right: 0;
    text-align: left;
  }
`;

const ChartYes = css.div`
  ${chartBase};
  background-color: ${color.greenM};
  flex-basis: ${({ value }) => value}%;
  & > span {
    color: ${color.greenM};
    left: 0;
    text-align: left;
  }
`;

const ChartVal = css.span`
  ${setType("x")};
  color: ${color.greyM};
  font-weight: bold;
  letter-spacing: ${track.s};
`;

const Chart = (props) => (
  <ChartEl>
    <ChartBlock>
      <ChartAnswer>{props.answer1}</ChartAnswer>
      <ChartAnswer>{props.answer2}</ChartAnswer>
    </ChartBlock>
    <ChartBlock>
      <ChartYes value={props.val1} />
      <ChartNo value={props.val2} />
    </ChartBlock>
    <ChartBlock>
      <ChartVal>{props.val1}%</ChartVal>
      <ChartVal>{props.val2}%</ChartVal>
    </ChartBlock>
  </ChartEl>
);

Chart.propTypes = {
  answer1: string.isRequired,
  answer2: string.isRequired,
  val1: number,
  val2: number
};

Chart.defaultProps = {
  val1: 0,
  val2: 0
};

export default Chart;
