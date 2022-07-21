import Head from 'next/head';
import { useRouter } from 'next/router';
import Logo from '../assets/Manager-Portfolio-Logotipo.gif'
import Button from '../components/Button';
import { Main, Div, Section } from '../styles/pages/Home';

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
          <Button width='150px' heigth='45px' onClick={() => router.push('/login')}>Login</Button>
          <Button width='150px' heigth='45px' onClick={() => router.push('/signup')}>Cadastro</Button>
        </Section>
      </Main>
    </div>
  );
}
