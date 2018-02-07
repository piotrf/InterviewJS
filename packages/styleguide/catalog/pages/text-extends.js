import React from "react";
import css from "styled-components";
import { markdown, ReactSpecimen } from "catalog";

import { Text } from "../components";

const TextExtend = Text.extend`
  color: red;
`;
const TextWithComponent = Text.withComponent("h1");

export default () => markdown`

  You can extend any Text style or use Text to render any type of HTML tag [as you’d normally do with styled-components](https://www.styled-components.com/docs/basics#extending-styles)

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
