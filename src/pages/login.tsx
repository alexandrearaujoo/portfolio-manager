import Head from 'next/head';
import Link from 'next/link';
import Input from '../components/Input';
import { Container, Form, H2, Button } from '../styles/pages/Login';

const Login = () => {
  return (
    <>
      <Head>
        <title>Portfolio Manager | Login</title>
      </Head>
      <Container>
        <Form>
          <H2>Login</H2>
          <Input label="Email" type="text" />
          <Input label="Password" icon />
          <Button>
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
