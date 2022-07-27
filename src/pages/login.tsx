import Head from 'next/head';
import Link from 'next/link';
import { Input } from '../components/Input';
import { Container, Form, H2 } from '../styles/pages/Login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas';
import { useUser } from '../providers/User';
import Button from '../components/Button';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: LoginProps) => {
    await login(data);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H2>Login</H2>
          <Input
            label="Email"
            type="text"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            icon
            {...register('password')}
            error={errors.password?.message}
          />
          <Button type="submit" color='#fff'>Logar</Button>
          <p>
            Não possui conta ainda ?{' '}
            <Link href="/signup">
              <a>Cadastre-se</a>
            </Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default Login;
