import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
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

const EditProject = ({ isOpen, handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(updateProjectSchema)
  });

  const onSubmit = async (data: EditProjectProps) => {
    console.log(data);
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
          defaultValue={'teste'}
          {...register('title')}
          error={errors.title?.message}
        />
        <Input
          label="Type"
          type="text"
          defaultValue={'teste'}
          {...register('type')}
        />
        <Input
          label="Slug"
          type="text"
          defaultValue={'teste'}
          {...register('slug')}
        />
        <Input
          label="Description"
          type="text"
          defaultValue={'teste'}
          {...register('description')}
        />
        <Input
          label="Link Website"
          type="text"
          defaultValue={'teste'}
          {...register('link_website')}
          error={errors.link_website?.message}
        />
        <Input
          label="Link GitHub"
          type="text"
          defaultValue={'teste'}
          {...register('link_github')}
          error={errors.link_github?.message}
        />
        <Button type="submit">
          <span>Registrar</span>
        </Button>
      </Form>
    </Container>
  );
};

export default EditProject;
