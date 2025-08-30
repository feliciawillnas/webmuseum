import styled from "styled-components";

export function Shop() {
  return (
    <>
      <Main>
        <div>
          <BlackDiv></BlackDiv>
          <WhiteDiv></WhiteDiv>
        </div>
        <div>
          <PinkDiv></PinkDiv>
          <GrayDiv></GrayDiv>
        </div>
      </Main>
    </>
  );
}

const Main = styled.div`
  div {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
`;

const BlackDiv = styled.div`
  background-color: black;
  height: 150px;
`;

const WhiteDiv = styled.div`
  background-color: white;
  height: 150px;
`;

const PinkDiv = styled.div`
  background-color: pink;
  height: 150px;
`;

const GrayDiv = styled.div`
  background-color: gray;
  height: 150px;
`;
