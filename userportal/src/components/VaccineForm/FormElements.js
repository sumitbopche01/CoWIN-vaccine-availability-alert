import styled from "styled-components";

export const FormContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #52b788;
  height: 100vh;
  width: 100%;
  margin: 0;
  max-width: 500px;

  @media screen and (max-width: 400px) {
    max-width: 375px;
  } */
  height: 100%;
  display: flex;
  color: black;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  z-index: 2;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background-color: white;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    max-width: 375px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 14px;

  > span {
    color: red;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #d8f3dc;
`;

export const FormButton = styled.div`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 16px 0;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: 600;
`;

export const Headline = styled.div`
  margin: 0 auto;
  padding-bottom: 0px;
  padding-top: 0px;
  width: 100%;
  text-align: center;
`;
