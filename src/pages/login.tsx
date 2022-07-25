import Head from 'next/head';
import Link from 'next/link';
import { Input } from '../components/Input';
import { Container, Form, H2, Button } from '../styles/pages/Login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data: LoginProps) => {
    console.log(data);
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
          <Button type="submit">
            <span>Logar</span>
          </Button>
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
