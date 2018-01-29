import React from "react";
import { markdown, ReactSpecimen } from "catalog";
import { ThemeProvider } from "styled-components";

import { Action } from "../components";

export default () => markdown`

  ## Primary Actions

  ${(
    <ReactSpecimen span={3}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif",
          mainColor: "magenta"
        }}
      >
        <Action primary>Themed</Action>
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
        <Action primary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

  ## Secondary Actions

  ${(
    <ReactSpecimen span={3}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif",
          mainColor: "magenta"
        }}
      >
        <Action secondary>Themed</Action>
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
        <Action secondary>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

  ## Plain Actions

  ${(
    <ReactSpecimen span={3}>
      <ThemeProvider
        theme={{
          font: "'PT Sans', sans-serif",
          mainColor: "magenta"
        }}
      >
        <Action>Themed</Action>
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
        <Action>Themed</Action>
      </ThemeProvider>
    </ReactSpecimen>
  )}

`;
