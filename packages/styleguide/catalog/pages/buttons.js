import React from "react";
import { markdown, ReactSpecimen } from "catalog";
import { ThemeProvider } from "styled-components";

import { Button, Icon } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button primary onClick={evt => console.log(evt)}>
        Primary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button primary href="http://twitter.com" target="_blank">
        <Icon name="twitter" /> &nbsp; Primary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button primary href="http://twitter.com" target="_blank">
        Primary button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary iconic positive>
        i
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary href="http://twitter.com" target="_blank" iconic negative>
        <Icon name="twitter" />
      </Button>
    </ReactSpecimen>
  )}

  ## Secondary Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button secondary onClick={evt => console.log(evt)}>
        Secondary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button secondary href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Secondary Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button secondary href="http://facebook.com" target="_blank">
        Secondary button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button secondary iconic positive>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button
        secondary
        href="http://facebook.com"
        target="_blank"
        iconic
        negative
      >
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

  ## Plain Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button plain onClick={evt => console.log(evt)}>
        Inverted button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button plain href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Inverted Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button plain href="http://facebook.com" target="_blank">
        Inverted button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button plain iconic positive>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button plain href="http://facebook.com" target="_blank" iconic negative>
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

  ## Inverted Buttons

  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted onClick={evt => console.log(evt)}>
        Inverted button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Inverted Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted href="http://facebook.com" target="_blank">
        Inverted button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Button inverted iconic>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Button inverted href="http://facebook.com" target="_blank" iconic>
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

  ## Themeable Buttons

  ${(
    <ReactSpecimen span={3}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif",
          mainColor: "magenta"
        }}
      >
        <Button primary>Themed</Button>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <ThemeProvider
        theme={{
          font: "monospace",
          mainColor: "red"
        }}
      >
        <Button secondary>Themed</Button>
      </ThemeProvider>
    </ReactSpecimen>
  )}

`;
