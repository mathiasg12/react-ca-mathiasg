import * as yup from 'yup';
export const formSchema = yup.object({
  fullName: yup
    .string()
    .required('Name is required')
    .min(3, 'Name needs to be at least 3 characters long'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject needs to be at least 3 characters long'),

  email: yup
    .string()
    .required('Email is required')
    .email('Plese use a valid email format: example@gmail.com'),
  textArea: yup
    .string()
    .required('Please write your message')
    .min(3, 'The message needs to be at least 3 characters long'),
});
