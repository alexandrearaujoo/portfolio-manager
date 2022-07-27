import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: string;
}

const Button = ({ children, color, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled color={color} {...rest}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;
