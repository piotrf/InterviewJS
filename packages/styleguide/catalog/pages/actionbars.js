import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Actionbar, Button } from "../components";

export default () => markdown`
  ## Plain Actionbars

  ${(
    <ReactSpecimen>
      <Actionbar>
        <Button>Button</Button>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
      </Actionbar>
    </ReactSpecimen>
  )}

  ## Actionbars w/ satellites

  ${(
    <ReactSpecimen>
      <Actionbar satellite="right">
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
        <Button iconic>i</Button>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="both">
        <Button iconic>?</Button>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
        <Button iconic>i</Button>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="left">
        <Button iconic>?</Button>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
      </Actionbar>
    </ReactSpecimen>
  )}

`;
