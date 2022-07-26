import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { projectSchema } from '../../schemas';
import { Input } from '../Input';
import { Container, Form, Button, CloseButton } from './styles';
import { IoClose } from 'react-icons/io5';

interface ProjectProps {
  title: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website: string;
  link_github: string;
  img: any;
}

const RegisterProject = ({ openRegister, handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(projectSchema)
  });

  const onSubmit = async (data: ProjectProps) => {
    console.log(data);
  };

  useEffect(() => {
    document.body.style.overflowY = openRegister ? 'hidden' : 'auto';
  }, [openRegister]);

  return (
    <Container>
      <CloseButton onClick={handleClick}>
        <IoClose size={25}/>
      </CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title *"
          type="text"
          {...register('title')}
          error={errors.title?.message}
        />
        <Input label="Type" type="text" {...register('type')} />
        <Input label="Slug" type="text" {...register('slug')} />
        <Input label="Description" type="text" {...register('description')} />
        <Input
          label="Link Website *"
          type="text"
          {...register('link_website')}
          error={errors.link_website?.message}
        />
        <Input
          label="Link GitHub *"
          type="text"
          {...register('link_github')}
          error={errors.link_github?.message}
        />
        <Input label="Thumbnail" type="file" {...register('img')} />
        <Button type="submit">
          <span>Registrar</span>
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterProject;
