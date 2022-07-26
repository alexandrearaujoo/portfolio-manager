import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required field'),
  password: yup.string().required('Required field')
})

export const signUpSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required field'),
  password: yup.string().required('Required field'),
  name: yup.string().required('Required field')
})

export const projectSchema = yup.object().shape({
  title: yup.string().required('Required field'),
  type: yup.string(),
  slug: yup.string(),
  description: yup.string(),
  link_website: yup.string().required('Required field'),
  link_github: yup.string().required('Required field'),
  img: yup.mixed()
})
