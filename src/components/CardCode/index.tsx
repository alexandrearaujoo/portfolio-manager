import {
  Card,
  Circle,
  Green,
  Red,
  Tools,
  Yellow,
  H4,
  DivImg,
  Const,
  SpanToken,
  Token
} from './styles';

interface CardCodeProps {
  text: string;
  img?: string;
  token?: string;
}

const CardCode = ({ text, img, token }: CardCodeProps) => {
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
        <H4>{text}</H4>
        {img ? (
          <img src={img} alt={text} />
        ) : (
          <Const>
            {' '}
            <div>
              const <SpanToken>Token</SpanToken> = <Token>{token}</Token>
            </div>
            <div>
              const <SpanToken>baseURL</SpanToken> ={' '}
              <Token>https://manager-portfolio-api.herokuapp.com/api/</Token>
            </div>
          </Const>
        )}
      </DivImg>
    </Card>
  );
};

export default CardCode;
