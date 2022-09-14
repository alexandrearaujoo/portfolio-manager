import { useEffect, useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import EditProject from '../EditProject';
import {
  Container,
  Button,
  CardFooter,
  CardImage,
  CardInfo,
  Desctiption,
  Title,
  Div
} from './styles';
import Empty from '../../assets/empty.webp';
import { scrollToTop } from '../../utils/scrollToTop';

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
    scrollToTop();
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <Container>
        <CardImage
          src={project.img ? project.img : Empty}
          alt={project.title}
        />
        <CardInfo>
          <Title>{project.title}</Title>
          <Desctiption>
            {project.description ? project.description : 'Sem descrição'}
          </Desctiption>
        </CardInfo>
        <CardFooter>
          <Div>
            <Title>{project.type ? project.type : 'Sem tipo'}</Title>
            <Button onClick={handleClick}>
              <FiMoreVertical size={20} />
            </Button>
          </Div>
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
