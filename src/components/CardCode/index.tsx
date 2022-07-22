import { Card, Circle, Green, Red, Tools, Yellow } from './styles';

const CardCode = () => {
  return (
    <Card>
      <Tools>
        <Circle>
          <Yellow></Yellow>
        </Circle>
        <Circle>
          <Red></Red>
        </Circle>
        <Circle>
          <Green></Green>
        </Circle>
      </Tools>
    </Card>
  );
};

export default CardCode;
