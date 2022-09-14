import Head from 'next/head';
import { useEffect, useState } from 'react';
import CardProject from '../components/CardProjects';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import RegisterProject from '../components/RegisterProject';
import { Main, Button } from '../styles/pages/Dashboard';
import { BiBookAdd } from 'react-icons/bi';
import { useProject } from '../providers/Projects';
import Loading from '../components/Loading';
import { useUser } from '../providers/User';
import { requireAuthentication } from '../utils/auth';

export const getServerSideProps = requireAuthentication(async context => {
  const email = '';

  return {
    props: {
      email
    }
  };
});

const Dashboard = () => {
  const { user } = useUser();
  const { projects, getProjects } = useProject();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleClick = () => {
    setOpenRegister(!openRegister);
  };

  const fecthUser = async () => {
    if (user) {
      await getProjects(user.token);
    }
  };

  useEffect(() => {
    fecthUser();
    document.body.style.overflowY = openRegister ? 'hidden' : 'auto';
  }, [user, openRegister]);

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
      <Main>
        {projects.map(project => (
          <CardProject key={project.id} {...project} />
        ))}
      </Main>
    </>
  );
};

export default Dashboard;
