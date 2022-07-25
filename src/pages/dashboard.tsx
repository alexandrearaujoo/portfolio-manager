import Head from 'next/head';
import { useState } from 'react';
import CardProject from '../components/CardProjects';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import { useUser } from '../providers/User';
import { Main } from '../styles/pages/Dashboard';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Main>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <CardProject key={item} />
        ))}
      </Main>
    </>
  );
};

export default Dashboard;
