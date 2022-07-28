import {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
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
  projects: GetProjectProps;
  createProject: (data: ProjectProps, token: string) => Promise<void>;
  getProjects: (token: string) => Promise<void>;
  editProject: (data: EditProjectProps, id: string, token: string) => Promise<void>;
  deleteProject: (id: string, token: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData
);

export const ProjectProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<GetProjectProps>();

  const createProject = async (data: ProjectProps, token: string) => {
    await api
      .post('projects/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        getProjects(token);
        toast.success('Registered project');
      })
      .catch(err => console.log(err));
  };

  const getProjects = async (token: string) => {
    const { data } = await api.get('projects/', {
      headers: {
        Authorization: `Token ${token}`
      }
    });

    setProjects(data);
  };

  const editProject = async (data: EditProjectProps, id: string, token: string) => {
    await api
      .patch(`projects/${id}`, data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(_ => getProjects(token) && toast.success('Updated Project'))
      .catch(err => console.log(err));
  };

  const deleteProject = async (id: string, token: string) => {
    await api
      .delete(`projects/${id}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(_ => getProjects(token) && toast.success('Deleted Project'))
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
