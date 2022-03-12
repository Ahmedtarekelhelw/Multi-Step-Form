import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 30px auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  outline: none;
  margin-bottom: 35px;
  border: none;
  padding: 10px;
  border-radius: 3px;
`;
