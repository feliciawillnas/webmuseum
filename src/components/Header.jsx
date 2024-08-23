import React from "react";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import styled from "styled-components";

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <Navigation />
        <Logo />
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
