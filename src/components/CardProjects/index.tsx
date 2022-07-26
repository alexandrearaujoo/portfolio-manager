import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import Background from '../../assets/background.jpg';
import EditProject from '../EditProject';
import {
  Container,
  Button,
  CardFooter,
  CardImage,
  CardInfo,
  Desctiption,
  Title
} from './styles';

const CardProject = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <CardImage src={Background} alt="Teste" />
        <CardInfo>
          <Title>Product title </Title>
          <Desctiption>Product description and details</Desctiption>
        </CardInfo>
        <CardFooter>
          <Title>$499.49</Title>
          <Button onClick={handleClick}>
            <FiMoreVertical size={20} />
          </Button>
        </CardFooter>
      </Container>
      {isOpen && <EditProject isOpen={isOpen} handleClick={handleClick}/>}
    </>
  );
};

export default CardProject;
