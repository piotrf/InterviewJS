import React, { Component } from "react";
import { groupBy } from "lodash";
import { scrolled } from "react-stay-scrolled";
import { arrayOf, object } from "prop-types";

import { Bubble, BubbleGroup, Bubbles } from "interviewjs-styleguide";

class Storyline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { storyline } = this.props;
    const groups = groupBy(storyline, (obj) => obj.order);
    return (
      <div>
        {Object.keys(groups).map((group, i) => (
          <BubbleGroup key={group}>
            <Bubbles persona={groups[group][0].role}>
              {Object.keys(groups[group]).map((msg, i) => (
                <Bubble key={msg} persona={groups[group][msg].role}>
                  {groups[group][msg].content}
                </Bubble>
              ))}
            </Bubbles>
          </BubbleGroup>
        ))}
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: arrayOf(object)
};

Storyline.defaultProps = {
  storyline: []
};

export default scrolled(Storyline);
