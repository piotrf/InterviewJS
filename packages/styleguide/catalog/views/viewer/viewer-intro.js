import React from "react";
import css from "styled-components";
import {} from "prop-types";

import { Container } from "../../components";
import { Cover } from "../../partials";

import CoverImg from "../../static/cover.jpg";

export const ViewHead = css(Cover)`
  flex: 1 0 50%;
`;

export const ViewBody = css.div`
  display: flex;
  flex-direction: reverse-column;
  flex: 2 0 0%;
  overflow-y: auto;
`;

export const ViewFoot = css.div`
  flex: 0 0 80px;
`;

const ViewerIntro = () => (
  <Container cover limit fill="black" flex="column">
    <ViewHead image={CoverImg}>Head</ViewHead>
    <ViewBody>Body</ViewBody>
    <ViewFoot>Foot</ViewFoot>
  </Container>
);

export default ViewerIntro;
