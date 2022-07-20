import { InputHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Button from '../Button';
import { Container, InputContainer} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  type: string;
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
        </InputContainer>
        <Button
          width="30px"
          heigth="30px"
          background="transparent"
          onClick={handleClick}
          icon={showPassword ? AiOutlineEyeInvisible : AiOutlineEye }
        />
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
