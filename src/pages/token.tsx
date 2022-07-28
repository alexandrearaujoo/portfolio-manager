import Head from 'next/head';
import { Main } from '../styles/pages/Token';
import CardCode from '../components/CardCode';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import { useState } from 'react';
import { useUser } from '../providers/User';
import Loading from '../components/Loading';
import Axios from '../assets/Axios.png';
import Fetch from '../assets/Fetch.png';
import { requireAuthentication } from '../utils/auth';

export const getServerSideProps = requireAuthentication(async context => {
  const email = '';

  return {
    props: {
      email
    }
  };
});

const Token = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useUser();

  if (!user) return <Loading />;

  return (
    <>
      <Head>
        <title>Token de Acesso</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Main>
        <CardCode text="Seu token de acesso" token={user.token} />
        <CardCode text="Como usar com Axios" img={Axios} />
        <CardCode text="Como usar com Fetch" img={Fetch} />
      </Main>
    </>
  );
};

export default Token;
