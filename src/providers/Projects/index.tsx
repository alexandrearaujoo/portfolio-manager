import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
import router from 'next/router';
import { useUser } from '../User';

interface Props {
  children: ReactNode;
}

interface ProjectProps {
  title: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website: string;
  link_github: string;
  img: any;
}

interface EditProjectProps {
  title?: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website?: string;
  link_github?: string;
}

interface ProjectContextData {
  projects: ProjectProps[];
  createProject: (data: ProjectProps) => Promise<void>;
  getProjects: () => Promise<void>;
  editProject: (data: EditProjectProps, id: string) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData
);

export const ProjectProvider = ({ children }: Props) => {
  const { user } = useUser();
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const createProject = async (data: ProjectProps) => {
    await api
      .post('projects/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${user.token}`
        }
      })
      .then(_ => toast.success('Registered project'))
      .catch(err => console.log(err));
  };

  const getProjects = async () => {
    const { data } = await api.get('projects/', {
      headers: {
        Authorization: `Token ${user.token}`
      }
    });

    setProjects(data);
  };

  const editProject = async (data: EditProjectProps, id: string) => {
    await api
      .patch(`projects/${id}`, data, {
        headers: {
          Authorization: `Token ${user.token}`
        }
      })
      .then(_ => getProjects() && toast.success('Updated Project'))
      .catch(err => console.log(err));
  };

  const deleteProject = async (id: string) => {
    await api
      .delete(`projects/${id}`, {
        headers: {
          Authorization: `Token ${user.token}`
        }
      })
      .then(_ => getProjects() && toast.success('Deleted Project'))
      .catch(err => console.log(err));
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        createProject,
        getProjects,
        editProject,
        deleteProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
