import styled from "styled-components";

export const ResultPageContainer = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #d8e2dc;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-top:10px;
  justify-content: center;
`;

export const Title = styled.p`
  color: whitesmoke;
  background-color: #233d4d;
  padding: 2px;
  border-radius: 4px;
`;

export const Card = styled.div`
  background-color: #2a9d8f;
  padding: 10px;
  margin: 5px;
  box-shadow: 5px 5px 5px #aaaaaa;
  width: 258px;
  color: white;
  font-weight: 600;
`;

export const Message = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  /* height: 100px; */
  padding: 40px 40px;
  margin: 0 auto;
  background-color: #457b9d;
  text-align: center;
  justify-items: center;
  justify-self: center;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 10px;
`;

export const VaccineMsg = styled.div`
  > a {
    color: #ffb703;
  }
`;

export const Place = styled.div`
background-color: #014f86;
align-items: center;
justify-content: center;
text-align: center;
padding: 2px;
`