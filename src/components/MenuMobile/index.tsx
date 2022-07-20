import { Container, Ul } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
          <li onClick={() => router.push('/projects')}>Meus Projetos</li>
          <li onClick={() => router.push('/documentation')}>Documentação</li>
          <li onClick={() => router.push('/token')}>Token de acesso</li>
          <li onClick={() => router.push('/profile')}>Perfil</li>
        </Ul>
      </nav>
    </Container>
  );
};

export default MenuMobile;
