import React from "react";
import css from "styled-components";
import { arrayOf, bool, number, oneOfType, string } from "prop-types";

import { breakpoint, color, radius, setSpace } from "../../../utils";

export const ContainerEl = css.div`
  position: relative;
  ${({ fill }) => {
    if (fill === "white") {
      return `background: ${color.white}`;
    } else if (fill === "black") {
      return `background: ${color.black}`;
    } else if (fill === "grey") {
      return `background: ${color.greyWt}`;
    }
    return null;
  }};
  ${({ shift }) =>
    shift
      ? `
    box-shadow: 0 2px 4px ${color.shadowHL};
  `
      : ``};
  ${({ inset }) =>
    inset
      ? `
    box-shadow: inset 0 2px 4px ${color.shadowHL};
  `
      : ``};
  ${({ rounded }) =>
    rounded
      ? `
    border-radius: ${radius.h};
  `
      : ``};
  ${({ padded }) =>
    padded
      ? `
    ${setSpace("pam")};
  `
      : ``};
  ${({ dir }) =>
    dir !== null
      ? `
    align-items: center;
    display: flex;
    flex-direction: ${dir};
    justify-content: center;
  `
      : ``};
  ${({ flex }) =>
    flex !== null
      ? `
    flex: ${flex[0]} ${flex[1]} ${flex[2]};
  `
      : ``};
  ${({ align }) =>
    align !== null
      ? `
    text-align: ${align};
  `
      : ``};
  ${({ limit }) =>
    limit !== null
      ? `
    ${breakpoint.tablet} {
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
    }
    ${breakpoint.desktop} {
      max-width: 1024px;
    }
    ${breakpoint.hdesktop} {
      max-width: 1200px;
    }
  `
      : ``};
`;

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = { pageHeight: null };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    const windowHeight = window.innerHeight;
    return this.setState({
      pageHeight: windowHeight
    });
  }
  render() {
    return (
      <ContainerEl
        {...this.props}
        style={
          this.props.cover
            ? {
                minHeight: this.state.pageHeight
              }
            : null
        }
      />
    );
  }
}

Container.propTypes = {
  align: string,
  flex: arrayOf(oneOfType([number, string])),
  cover: bool,
  fill: string,
  dir: string,
  inset: bool,
  limit: bool,
  padded: bool,
  rounded: bool,
  shift: bool
};

Container.defaultProps = {
  align: null,
  flex: null,
  cover: null,
  fill: null,
  dir: null,
  inset: null,
  limit: null,
  padded: null,
  rounded: null,
  shift: null
};
