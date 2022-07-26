import Link from 'next/link';
import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { HiStatusOnline } from 'react-icons/hi';
import EditProject from '../EditProject';
import {
  Container,
  Button,
  CardFooter,
  CardImage,
  CardInfo,
  Desctiption,
  Title,
  DivLink,
  Div
} from './styles';

interface GetProjectProps {
  id: string;
  title: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website: string;
  link_repository: string;
  img: any;
}

const CardProject = (project: GetProjectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <CardImage
          src={
            project.img
              ? project.img
              : 'https://w7.pngwing.com/pngs/233/537/png-transparent-stop-sign-stop-miscellaneous-angle-rectangle-thumbnail.png'
          }
          alt="Teste"
        />
        <CardInfo>
          <Title>{project.title}</Title>
          <Desctiption>{project.description}</Desctiption>
        </CardInfo>
        <CardFooter>
          <Div>
            <Title>{project.type}</Title>
            <Button onClick={handleClick}>
              <FiMoreVertical size={20} />
            </Button>
          </Div>
          <DivLink>
            <Link href={project.link_repository}>
              <a>
                <AiFillGithub size={30} />
              </a>
            </Link>
            <Link href={project.link_website}>
              <a>
                <HiStatusOnline size={30} />
              </a>
            </Link>
          </DivLink>
        </CardFooter>
      </Container>
      {isOpen && (
        <EditProject
          isOpen={isOpen}
          handleClick={handleClick}
          setIsOpen={setIsOpen}
          project={project}
        />
      )}
    </>
  );
};

export default CardProject;
