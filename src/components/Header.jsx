import styled from "styled-components";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

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

const HeaderWrapper = styled.header`
  display: flex;
  top: 0;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 1rem;
  z-index: 1000;
`;
