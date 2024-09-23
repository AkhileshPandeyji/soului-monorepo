import React from "react";
import styled from "styled-components";

const Btn = styled.button<{
  width: number;
  height: number;
  bg: string;
}>`
  color: white;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ bg }) => bg};
  border-radius: 12px;
`;

interface ButtonProps {
  width: number;
  height: number;
  text: string;
  bg: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { width, height, text, bg } = props;
  return <Btn width={width} height={height} bg={bg}>{text}</Btn>
}

export default Button;