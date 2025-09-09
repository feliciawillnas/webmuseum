import { Link } from "react-router-dom";
import styled from "styled-components";

export function Logo() {
  return (
    <>
      <LogoWrapper>
        <Link to="/">-</Link>
      </LogoWrapper>
    </>
  );
}

const LogoWrapper = styled.div`
  font-size: 7rem;
  line-height: 0;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.4s ease;

    &:hover {
    }
  }
`;
