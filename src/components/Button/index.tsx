import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: string;
  fontSize?: number
}

const Button = ({ children, color, fontSize = 15, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled color={color} fontSize={fontSize} {...rest}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;
