import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import { Main, Div, Section } from '../styles/pages/Home';
import Logo from '../assets/logo.png'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Portfolio Manager | Home</title>
      </Head>
      <Main>
        <Div>
          <img src={Logo} alt="Logo" />
          <p>Registre seus projetos de forma rapida e eficaz!</p>
        </Div>
        <Section>
          <Button fontSize={20} onClick={() => router.push('/login')}>Login</Button>
          <Button fontSize={20} onClick={() => router.push('/signup')}>Cadastro</Button>
        </Section>
      </Main>
    </div>
  );
}
