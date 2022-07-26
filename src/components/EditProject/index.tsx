import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { useProject } from '../../providers/Projects';
import { updateProjectSchema } from '../../schemas';
import { Input } from '../Input';
import { CloseButton, Container, Form, Button } from './styles';

interface EditProjectProps {
  title?: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website?: string;
  link_github?: string;
}

const EditProject = ({ isOpen, handleClick, setIsOpen, project }) => {
  const { editProject, deleteProject } = useProject();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(updateProjectSchema)
  });

  const onSubmit = async (data: EditProjectProps) => {
    await editProject(data, project.id);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <Container>
      <CloseButton onClick={handleClick}>
        <IoClose size={25} />
      </CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          type="text"
          defaultValue={project.title}
          {...register('title')}
          error={errors.title?.message}
        />
        <Input
          label="Type"
          type="text"
          defaultValue={project.type}
          {...register('type')}
        />
        <Input
          label="Slug"
          type="text"
          defaultValue={project.slug}
          {...register('slug')}
        />
        <Input
          label="Description"
          type="text"
          defaultValue={project.description}
          {...register('description')}
        />
        <Input
          label="Link Website"
          type="text"
          defaultValue={project.link_website}
          {...register('link_website')}
          error={errors.link_website?.message}
        />
        <Input
          label="Link Repository"
          type="text"
          defaultValue={project.link_repository}
          {...register('link_repository')}
          error={errors.link_repository?.message}
        />
        <Button type="submit">
          <span>Editar</span>
        </Button>
        <Button
          type="button"
          onClick={async () => await deleteProject(project.id)}
        >
          <span>Deletar</span>
        </Button>
      </Form>
    </Container>
  );
};

export default EditProject;
