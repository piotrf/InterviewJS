import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Text, PageSubtitle, PageTitle } from "../components";

const TextExtend = Text.extend`
  color: red;
`;
const TextWithComponent = Text.withComponent("h1");

export default () => markdown`

  You can extend any Text style or use Text to render any type of HTML tag [as you’d normally do with styled-components](https://www.styled-components.com/docs/basics#extending-styles)

  ## Page Title extends

  ${(
    <ReactSpecimen span={3}>
      <PageTitle typo="h1">Renders as h1</PageTitle>
    </ReactSpecimen>
  )}

  ${(
    <ReactSpecimen span={3}>
      <PageSubtitle typo="h1">Renders as h2</PageSubtitle>
    </ReactSpecimen>
  )}

  ## Creating extends

  ${(
    <ReactSpecimen>
      <TextExtend>Text.extend`color: red;`</TextExtend>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <TextWithComponent>Text.withComponent("h1")</TextWithComponent>
    </ReactSpecimen>
  )}

`;
