import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 14px 10px;
  background-color: #dc4298;
  color: white;
  border: none;
  outline: none;
  border-radius: 100px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonComponents = ({ title }) => {
  return <Button>{title}</Button>;
};

export default ButtonComponents;
