import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Actionbar, Action, Icon, Preloader } from "../components";

export default () => markdown`
  ## Plain Actionbars

  ${(
    <ReactSpecimen>
      <Actionbar>
        <Action secondary>Action</Action>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar>
        <Action secondary>Action 1</Action>
        <Action primary>Action 2</Action>
      </Actionbar>
    </ReactSpecimen>
  )}

  ## Actionbars w/ satellites

  ${(
    <ReactSpecimen>
      <Actionbar satellite="right">
        <Action secondary>Action 1</Action>
        <Action primary>Action 2</Action>
        <Action secondary iconic>
          i
        </Action>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="both">
        <Action secondary iconic>
          ?
        </Action>
        <Action secondary>Action 1</Action>
        <Action primary>Action 2</Action>
        <Action secondary iconic>
          i
        </Action>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="left">
        <Action secondary iconic>
          ?
        </Action>
        <Action secondary>Action 1</Action>
        <Action primary>Action 2</Action>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <Actionbar satellite="both">
        <Action secondary iconic>
          ?
        </Action>
        <Preloader />
        <Action secondary iconic>
          i
        </Action>
      </Actionbar>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen dark>
      <Actionbar satellite="both">
        <Action iconic inverted>
          <Icon name="chevron-left" />
        </Action>
        <Action iconic inverted>
          ?
        </Action>
      </Actionbar>
    </ReactSpecimen>
  )}

`;
