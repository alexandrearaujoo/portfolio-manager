import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: IconType;
  width?: string;
  heigth?: string;
  background?: string;
}

const Button = ({
  children,
  icon: Icon,
  width = '8em',
  heigth = '2.6em',
  background = '#0B949B',
  ...rest
}: ButtonProps) => {
  if (Icon) {
    return (
      <ButtonStyled
        width={width}
        heigth={heigth}
        background={background}
        {...rest}
      >
        <Icon />
      </ButtonStyled>
    );
  } else {
    return (
      <ButtonStyled
        width={width}
        heigth={heigth}
        background={background}
        {...rest}
      >
        {children}
      </ButtonStyled>
    );
  }
};

export default Button;
