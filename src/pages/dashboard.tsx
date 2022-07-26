import Head from 'next/head';
import { useEffect, useState } from 'react';
import CardProject from '../components/CardProjects';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import RegisterProject from '../components/RegisterProject';
import { Main, Button, H1 } from '../styles/pages/Dashboard';
import { BiBookAdd } from 'react-icons/bi';
import { useProject } from '../providers/Projects';
import Loading from '../components/Loading';

const Dashboard = () => {
  const { projects, getProjects } = useProject();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleClick = () => {
    setOpenRegister(!openRegister);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (!projects) return <Loading />;

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Button onClick={handleClick}>
        <BiBookAdd size={20} />
        <span>Registrar um projeto</span>
      </Button>
      {openRegister && (
        <RegisterProject
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
          handleClick={handleClick}
        />
      )}
      {projects.length > 0 ? (
        <Main>
          {projects.map(project => (
            <CardProject key={project.id} {...project} id={project.id} />
          ))}
        </Main>
      ) : (
        <h1>TESTE</h1>
      )}
    </>
  );
};

export default Dashboard;
