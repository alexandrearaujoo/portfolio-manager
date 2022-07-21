import { FiMoreVertical } from 'react-icons/fi';
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
      <CardImage></CardImage>
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
