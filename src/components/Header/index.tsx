import { Container, Nav, Ul } from './styles';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import { useUser } from '../../providers/User';

const Header = ({ setIsOpen }) => {
  const router = useRouter();

  const { logout } = useUser();

  return (
    <Container>
      <Nav>
        <Ul>
          <li onClick={() => router.push('/dashboard')}>Meus Projetos</li>
          <Link href="https://manager-portfolio-api.herokuapp.com/api/docs/">
            <a target="blank">Documentação</a>
          </Link>
          <li onClick={() => router.push('/token')}>Token de acesso</li>
          <li onClick={() => router.push('/email')}>Envio de email</li>
          <li onClick={logout}>Logout</li>
        </Ul>
        <IoMenu size={45} onClick={() => setIsOpen(true)} />
      </Nav>
    </Container>
  );
};

export default Header;
