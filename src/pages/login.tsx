import Head from 'next/head';
import Link from 'next/link';
import { Input } from '../components/Input';
import { Container, Form, H2 } from '../styles/pages/Login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas';
import { useUser } from '../providers/User';
import Button from '../components/Button';
import router from 'next/router';
import { useEffect } from 'react';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const { login, user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  console.log(user)

  useEffect(() => {
    user !== null && router.push('/dashboard')
  }, []);

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
          <Button type="submit" color="#fff">
            Logar
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
