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
      <Actionbar satellite="r">
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
        <Button iconic>i</Button>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="a">
        <Button iconic>?</Button>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
        <Button iconic>i</Button>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="l">
        <Button iconic>?</Button>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
      </Actionbar>
    </ReactSpecimen>
  )}

`;
