import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Link, Icon } from "../components";

export default () => markdown`
  ## Primary Links

  ${(
    <ReactSpecimen span={3}>
      <Link primary handleClick={evt => console.log(evt)}>
        Primary link
      </Link>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Link primary href="http://twitter.com" target="_blank">
        <Icon name="twitter" /> &nbsp; Primary link
      </Link>
    </ReactSpecimen>
  )}

  ## Secondary Links

  ${(
    <ReactSpecimen span={3}>
      <Link secondary handleClick={evt => console.log(evt)}>
        Secondary link
      </Link>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Link secondary href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Secondary Link
      </Link>
    </ReactSpecimen>
  )}

  ## Alert Links

  ${(
    <ReactSpecimen span={3}>
      <Link alert handleClick={evt => console.log(evt)}>
        Secondary link
      </Link>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Link alert href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Secondary Link
      </Link>
    </ReactSpecimen>
  )}

  ## Inverted Links

  ${(
    <ReactSpecimen span={3} dark>
      <Link inverted handleClick={evt => console.log(evt)}>
        Secondary link
      </Link>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Link inverted href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Secondary Link
      </Link>
    </ReactSpecimen>
  )}

`;
