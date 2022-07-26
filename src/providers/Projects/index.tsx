import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
import { useUser } from '../User';
import Loading from '../../components/Loading';

interface Props {
  children: ReactNode;
}

interface ProjectProps {
  title: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website: string;
  link_repository: string;
  img: any;
}

interface GetProjectProps {
  id: string;
  title: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website: string;
  link_repository: string;
  img: any;
}

interface EditProjectProps {
  title?: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website?: string;
  link_repository?: string;
}

interface ProjectContextData {
  projects: GetProjectProps[];
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
  const [projects, setProjects] = useState<GetProjectProps[]>([]);

  if (!user) return <Loading />;

  const createProject = async (data: ProjectProps) => {
    await api
      .post('projects/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${user.token}`
        }
      })
      .then(res => {
        getProjects();
        toast.success('Registered project');
      })
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
