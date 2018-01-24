import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Icon } from "../components";

export default () => markdown`
  ## Size variations

  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" size="x" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" size="s" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" size="m" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" size="l" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" size="h" />
    </ReactSpecimen>
  )}

  ## All icons

  ${(
    <ReactSpecimen span={1}>
      <Icon name="twitter" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="facebook" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="pencil" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="palette" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="paperclip" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="film" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="camera" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="picture" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="map" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="link" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="check" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="cross" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="plus" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="code" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="chevron-up" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="chevron-down" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="chevron-left" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="chevron-right" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="expand-vertical" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="question-circle" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="info-circle" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="plus-circle" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="minus-circle" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="ellipsis" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="menu" />
    </ReactSpecimen>
  )}

  # Emojis

  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-smiley" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-wink" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-neutral" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-pleased" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-tongue" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-shocked" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-baffled" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={1}>
      <Icon name="emo-mad" />
    </ReactSpecimen>
  )}


`;
