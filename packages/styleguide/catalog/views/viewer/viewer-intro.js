import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { Container } from "../../components";
import { Cover } from "../../partials";

import CoverImg from "../../static/cover.jpg";

export const IntroHead = css(Cover)`
  flex: 1 0 50%;
`;

export const IntroBody = css.div`
  display: flex;
  flex: 2 0 0%;
  overflow-y: auto;
`;

export const IntroFoot = css.div`
  flex: 0 0 80px;
`;

const ViewerIntro = () => (
  <Container cover fill="black" dir="column">
    <IntroHead image={CoverImg}>Head</IntroHead>
    <IntroBody>Body</IntroBody>
    <IntroFoot>Foot</IntroFoot>
  </Container>
);

export default ViewerIntro;
