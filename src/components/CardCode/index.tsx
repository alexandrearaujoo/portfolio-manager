
import Axios from '../../assets/Axios.png'
import Fetch from '../../assets/Fetch.png'
import { Card, Circle, Green, Red, Tools, Yellow, H4, DivImg } from './styles';

const CardCode =  () => {

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
      <DivImg>
        <H4>Como usar com Axios</H4>
        <img src={Axios} alt="Axios" />
        <H4>Como usar com Fetch</H4>
        <img src={Fetch} alt="Axios" />
      </DivImg>
    </Card>
  );
};

export default CardCode;
