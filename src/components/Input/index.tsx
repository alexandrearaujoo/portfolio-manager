import { InputHTMLAttributes, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, InputContainer, Button } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  type?: string;
}

const Input = ({ label, icon, type, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick = () => setShowPassword(!showPassword);

  if (icon) {
    return (
      <Container>
        <InputContainer>
          <input
            placeholder={label}
            type={showPassword ? 'text' : 'password'}
            {...rest}
          />
          <label>{label}</label>
          <Button type="button" onClick={handleClick}>
            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
          </Button>
        </InputContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <InputContainer>
          <input placeholder={label} type={type} {...rest} />
          <label>{label}</label>
        </InputContainer>
      </Container>
    );
  }
};

export default Input;
