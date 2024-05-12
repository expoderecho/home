import { ReactNode } from "react";
// import styles from "./Button.module.css";
import styled from "styled-components";

const Btn = styled.button`
  background-color: red;
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function Button(props: Props) {
  const { children, onClick } = props;

  return <Btn onClick={onClick}>{children}</Btn>;
}

export default Button;
