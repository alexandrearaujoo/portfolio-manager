import { useState } from 'react';
import CardProject from '../components/CardProjects';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header setIsOpen={setIsOpen}/>

      <CardProject />
    </>
  );
};

export default Dashboard;
