import React from "react";
import css from "styled-components";
import { bool, number, string } from "prop-types";

import { color, radius, setSpace } from "../../../utils";

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
    box-shadow: 0 1px 3px ${color.shadowHL};
  `
      : ``};
  ${({ inset }) =>
    inset
      ? `
    box-shadow: inset 0 1px 3px ${color.shadowHL};
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
  ${({ flex }) =>
    flex !== null
      ? `
    display: flex;
    flex-direction: ${flex};
  `
      : ``};
  ${({ basis }) =>
    basis !== null
      ? `
    flex-basis: ${100 / basis}%;
  `
      : ``};
  ${({ align }) =>
    align !== null
      ? `
    text-align: ${align};
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
  basis: number,
  cover: bool,
  fill: string,
  flex: string,
  inset: bool,
  padded: bool,
  rounded: bool,
  shift: bool
};

Container.defaultProps = {
  align: null,
  basis: null,
  cover: null,
  fill: null,
  flex: null,
  inset: null,
  padded: null,
  rounded: null,
  shift: null
};
