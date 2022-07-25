import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, InputContainer, Button } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  type?: string;
  error?: any;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  icon,
  type,
  error,
  ...rest
}, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick = () => setShowPassword(!showPassword);

  if (icon) {
    return (
      <Container>
        <InputContainer>
          <input
            placeholder={label}
            type={showPassword ? 'text' : 'password'}
            ref={ref}
            {...rest}
          />
          <label>
            {label} {!!error && <span> - {error}</span>}
          </label>
          <Button type="button" onClick={handleClick}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </Button>
        </InputContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <InputContainer>
          <input
            placeholder={label}
            type={type}
            ref={ref}
            {...rest}
          />
          <label>
            {label} {!!error && <span> - {error}</span>}
          </label>
        </InputContainer>
      </Container>
    );
  }
};

export const Input = forwardRef(InputDefault);
