import Head from 'next/head';
import { Main } from '../styles/pages/Token';
import CardCode from '../components/CardCode';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import { useState } from 'react';

const Token = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Token de Acesso</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Main>
        <h3>Seu token de acesso</h3>

        <h4>hsuhsushuushushuhushushushusuhusushus</h4>
        <CardCode />
      </Main>
    </>
  );
};

export default Token;
