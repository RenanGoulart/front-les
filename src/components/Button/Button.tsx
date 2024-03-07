import { PropsWithChildren } from "react";
import { ButtonContainer } from "./styles";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  );
}

export default Button;