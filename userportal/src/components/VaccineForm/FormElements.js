import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 450px) {
    padding: 5px;
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

  @media screen and (max-width: 450px) {
    /* padding: 32px 32px; */
    padding: 3px 3px;
    margin: 1px 1px;
    /* max-width: 400px; */
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

  @media screen and (max-width: 450px) {
    width: 80%;
    justify-self: center;
  }
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

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  }

  @media screen and (max-width: 450px) {
    /* padding: 8px 0; */
  }
`;

export const Headline = styled.div`
  margin: 0 auto;
  /* padding-bottom: 0px;
  padding-top: 0px; */
  padding: 0;
  width: 100%;
  text-align: center;

  > p > a {
    :hover {
      color: #ffb703;
    }
  }
  > h2 > a {
    :hover {
      color: #ffb703;
    }
  }
`;

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #d8f3dc;

  > option {
    font-size: 20px;
    background-color: white;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    justify-self: center;

    > option {
      font-size: 16px;
    }
  }
`;

export const FormInputList = styled.input`
  width: 500px;
`;
