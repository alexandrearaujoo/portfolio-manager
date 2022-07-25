import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Input } from '../components/Input';
import { signUpSchema } from '../schemas';
import { Container, Form, H2, Button } from '../styles/pages/Signup';

interface SignUpProps {
  name: string
  email: string
  password: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: SignUpProps) => {
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H2>Cadastro</H2>
          <Input label="Name" type="text" {...register('name')} error={errors.name?.message} />
          <Input label="Email" type="text" {...register('email')} error={errors.email?.message} />
          <Input label="Password" icon {...register('password')} error={errors.password?.message} />
          <Button type="submit">
            <span>Cadastrar</span>
          </Button>
          <p>
            Já possui conta ?{' '}
            <Link href="/login">
              <a>Logar</a>
            </Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
