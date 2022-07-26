import { ReactNode } from 'react';
import { ProjectProvider } from './Projects';
import { UserProvider } from './User';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <UserProvider>
      <ProjectProvider>{children}</ProjectProvider>
    </UserProvider>
  );
};

export default Provider;
