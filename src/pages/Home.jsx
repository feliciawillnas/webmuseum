import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

export function Home() {
  const theme = useTheme();

  return (
    <>
      <Main theme={theme}>
        <div>Home</div>
      </Main>
    </>
  );
}

const Main = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;
