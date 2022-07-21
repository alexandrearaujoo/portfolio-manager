import { FiMoreVertical } from 'react-icons/fi';
import Background from '../../assets/background.jpg';
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
  return (
    <Container>
      <CardImage src={Background} alt='Teste'/>
      <CardInfo>
        <Title>Product title </Title>
        <Desctiption>Product description and details</Desctiption>
      </CardInfo>
      <CardFooter>
        <Title>$499.49</Title>
        <Button>
          <FiMoreVertical size={20} />
        </Button>
      </CardFooter>
    </Container>
  );
};

export default CardProject;
