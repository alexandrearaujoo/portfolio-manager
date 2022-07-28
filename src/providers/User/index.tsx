import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
import router from 'next/router';
import Cookies from 'js-cookie'

interface Props {
  children: ReactNode;
}

interface User {
  token: string;
  user_id: string;
}

interface CreateUserProps {
  email: string;
  name: string;
  password: string;
}

interface LoginUserProps {
  email: string;
  password: string;
}

interface UserContextData {
  signUp: (data: CreateUserProps) => Promise<void>;
  login: (data: LoginUserProps) => Promise<void>;
  logout: () => void;
  user: User;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const data = Cookies.get('UserData')

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);



  const signUp = async (data: CreateUserProps) => {
    await api
      .post('users/register/', data)
      .then(
        _ => toast.success('Registered successfully') && router.push('/login')
      )
      .catch(err => toast.error(err.response.data.email[0]));
  };

  const login = async (data: LoginUserProps) => {
    await api
      .post('users/login/', data)
      .then(res => {
        Cookies.set('UserData', JSON.stringify(res.data))
        setUser(res.data)
        toast.success('Successfully logged in');
        router.push('/dashboard');
      })
      .catch(err => toast.error(err.response.data.message));
  };

  const logout = () => {
    Cookies.remove('UserData')
    setUser(null)
    router.push('/login');
  };

  return (
    <UserContext.Provider value={{ signUp, login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
