import { Container, Nav, Ul} from "./styles"
import {useRouter} from 'next/router'
import {IoMenu} from 'react-icons/io5'

const Header = ({setIsOpen}) => {

  const router = useRouter()

  return (
    <Container>
      <Nav>
        <Ul>
          <li onClick={() => router.push('/projects')}>Meus Projetos</li>
          <li onClick={() => router.push('/documentation')}>Documentação</li>
          <li onClick={() => router.push('/token')}>Token de acesso</li>
          <li onClick={() => router.push('/profile')}>Perfil</li>
        </Ul>
        <IoMenu size={45} onClick={() => setIsOpen(true)}/>
      </Nav>
    </Container>
  )
}

export default Header
