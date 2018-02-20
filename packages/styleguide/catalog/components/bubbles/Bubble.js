import React from "react";
import { string } from "prop-types";

import SpeakerBubble from "./SpeakerBubble";
import SystemBubble from "./SystemBubble";
import UserBubble from "./UserBubble";

const Bubble = (props) => {
  if (props.persona === "user") {
    return <UserBubble {...props} />;
  } else if (props.persona === "interviewee") {
    return <SpeakerBubble {...props} />;
  }
  return <SystemBubble {...props} />;
};

Bubble.propTypes = {
  persona: string
};

Bubble.defaultProps = {
  persona: null
};

export default Bubble;
