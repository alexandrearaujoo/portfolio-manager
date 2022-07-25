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
