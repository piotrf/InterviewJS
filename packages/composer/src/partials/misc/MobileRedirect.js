import React from "react";
import css from "styled-components";
import { object } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageTitle,
  Separator,
  breakpoint
} from "interviewjs-styleguide";

const MobileRedirectEl = css(Container)`
  display: none;
  ${breakpoint.onlyphone} {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
`;

const MobileRedirect = (props) => (
  <MobileRedirectEl key="Placeholder">
    <Container>
      <PageTitle typo="h2">This page works only on desktop</PageTitle>
      <Separator silent size="m" />
      <Actionbar>
        <Action primary fixed onClick={() => props.router.push(`/my/stories`)}>
          Return home
        </Action>
      </Actionbar>
    </Container>
  </MobileRedirectEl>
);

MobileRedirect.propTypes = {
  router: object.isRequired /* eslint react/forbid-prop-types: 0 */
};

MobileRedirect.defaultProps = {};

export default MobileRedirect;
