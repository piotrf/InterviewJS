import React from 'react';
import logo from 'assets/logo.svg';
import styled, { keyframes } from 'styled-components';

import { Avatar } from 'interviewjs-styleguide/catalog/components';
import Sample from "interviewjs-styleguide/catalog/static/avatar.png";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TopBar = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`;

function Header() {
  return (
    <TopBar>
      <img src={logo} className="redux-logo" alt="logo" />
      <h2>Welcome to Create Redux App</h2>
      <hr />
      <Avatar size="m" image={Sample} />
      <hr />
    </TopBar>
  );
}

export default Header;
