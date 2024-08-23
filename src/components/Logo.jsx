import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Logo() {
  const theme = useTheme();
  return (
    <>
      <LogoWrapper theme={theme}>
        <Link to="/">Logo</Link>
      </LogoWrapper>
    </>
  );
}

const LogoWrapper = styled.div`
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  color: ${({ theme }) => theme.palette.text.decorated};

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.4s ease;

    &:hover {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;
