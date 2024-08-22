import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navigation() {
  const theme = useTheme();

  return (
    <>
      <LinkWrapper theme={theme}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/information">Information</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  line-height: 1;
  list-style: none;

  a {
    text-decoration: none;

    font-family: ${({ theme }) => theme.typography.title.fontFamily};
    font-size: ${({ theme }) => theme.typography.title.fontSize};
    font-weight: ${({ theme }) => theme.typography.title.fontWeight};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
