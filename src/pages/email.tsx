import Head from 'next/head';
import CardCode from '../components/CardCode';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import { requireAuthentication } from '../utils/auth';
import email from '../assets/email.png'
import Loading from '../components/Loading';
import { useUser } from '../providers/User';
import { useState } from 'react';
import { Main } from '../styles/pages/Email';

export const getServerSideProps = requireAuthentication(async context => {
  const email = '';

  return {
    props: {
      email
    }
  };
});

const Email = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useUser();

  if (!user) return <Loading />;

  return (
    <>
      <Head>
        <title>Envio de email</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Main>
        <CardCode text="EndPoint e corpo para envio de email" img={email} height={320}/>
      </Main>
    </>
  );
};

export default Email;