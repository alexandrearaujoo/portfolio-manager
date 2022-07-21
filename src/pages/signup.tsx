import Head from 'next/head';
import Link from 'next/link';
import Input from '../components/Input';
import {
  Container,
  Form,
  H2,
  Button,
  TechsContainer
} from '../styles/pages/Signup';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Portfolio Manager | SignUp</title>
      </Head>
      <Container>
        <Form>
          <H2>Cadastro</H2>
          <Input label="Name" type="text" />
          <Input label="Email" type="text" />
          <Input label="Password" icon />
          <TechsContainer>
            <textarea />
            <label>Tecnologys</label>
          </TechsContainer>
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
