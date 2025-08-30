import styled from "styled-components";

export function Information() {
  return (
    <>
      <Main>
        <WhiteDiv></WhiteDiv>
        <PinkDiv></PinkDiv>
        <GrayDiv></GrayDiv>
      </Main>
    </>
  );
}

const Main = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const WhiteDiv = styled.div`
  background-color: white;
  height: 150px;
  transform: rotate(1deg);
  z-index: 10;
`;

const PinkDiv = styled.div`
  background-color: pink;
  height: 150px;
  transform: rotate(-1deg);
  z-index: 50;
`;

const GrayDiv = styled.div`
  background-color: gray;
  height: 150px;
  transform: rotate(1deg);
  z-index: 100;
`;
