import { Container, Ul } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuMobile = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <Container isOpen={isOpen}>
      <IoClose size={45} onClick={() => setIsOpen(false)} />
      <nav>
        <Ul>
          <li onClick={() => router.push('/dashboard')}>Meus Projetos</li>
          <Link href="https://manager-portfolio-api.herokuapp.com/api/docs/">
            <a target="blank">Documentação</a>
          </Link>
          <li onClick={() => router.push('/token')}>Token de acesso</li>
        </Ul>
      </nav>
    </Container>
  );
};

export default MenuMobile;
