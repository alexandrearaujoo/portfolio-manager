import Head from 'next/head';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Form, H2} from '../styles/pages/Login';

const SignUp = () => {
  return (
    <>
    <Head>
      <title>Portfolio Manager | Login</title>
    </Head>
    <Container>
      <Form>
        <Input label="Name" type="text" />
        <Input label="Email" type="text" />
        <Input label="Password" icon />
        <Button width='150px' heigth='45px'>Cadastrar</Button>
      </Form>
        <H2>Login</H2>
    </Container>
    </>
  );
};

export default SignUp;

