import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 8px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 20px 15px;
  margin: 25px 0px;
  box-sizing: border-box;
  border-left: 6px solid #7d8df3;
  word-wrap: break-word;
`;

interface Props {}
const TextCard: React.FC<Props> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default TextCard;
