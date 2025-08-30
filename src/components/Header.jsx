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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 1rem;
`;
