import styled from "styled-components";

export const Input = styled.input`
  width: ${props => props.width || "100%"};
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 2px;
  color: #b7bcdd;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-input-placeholder {
    color: #b7bcdd;
    line-height: 1;
    padding-top: 2px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 2px 10px #d8ddec;
  }
`;

export const SubmitButton = styled.button<any>`
  border: none;
  border-radius: 2px;
  background-color: #7d8df3;
  opacity: 0.8;
  padding: 10px 15px;
  color: white;
  text-transform: uppercase;
  -webkit-appearance: none;
  transition: all ease 240ms;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  margin: ${props => props.margin || "0"};
`;
