import Head from 'next/head';
import { useState } from 'react';
import CardProject from '../components/CardProjects';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import RegisterProject from '../components/RegisterProject';
import { Main, Button } from '../styles/pages/Dashboard';
import {BiBookAdd} from 'react-icons/bi'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleClick = () => {
    setOpenRegister(!openRegister);
  };

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Button onClick={handleClick} openRegister={openRegister}>
        <BiBookAdd size={20}/>
        <span>Registrar um projeto</span>
      </Button>
      {openRegister && (
        <RegisterProject
          openRegister={openRegister}
          handleClick={handleClick}
        />
      )}
      <Main>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <CardProject key={item} />
        ))}
      </Main>
    </>
  );
};

export default Dashboard;
