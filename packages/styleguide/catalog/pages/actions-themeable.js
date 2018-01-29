import React from "react";
import { markdown, ReactSpecimen } from "catalog";
import { ThemeProvider } from "styled-components";

import { Action } from "../components";

export default () => markdown`

  ## Primary Actions

  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          mainColor: "magenta"
        }}
      >
        <Action primary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "monospace"
        }}
      >
        <Action primary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "monospace",
          negativeColor: "red"
        }}
      >
        <Action primary tone="negative">
          Themed
        </Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

  ## Secondary Actions

  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          mainColor: "magenta"
        }}
      >
        <Action secondary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif"
        }}
      >
        <Action secondary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "monospace",
          positiveColor: "green"
        }}
      >
        <Action secondary tone="positive">
          Themed
        </Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

  ## Plain Actions

  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          mainColor: "magenta"
        }}
      >
        <Action>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif"
        }}
      >
        <Action>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <ThemeProvider
        theme={{
          font: "monospace",
          negativeColor: "red"
        }}
      >
        <Action tone="negative">Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

`;
