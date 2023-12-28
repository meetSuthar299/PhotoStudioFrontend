import { object, string } from 'yup';

const validation = object({
  name: string()
    .min(3, 'Your name must be at least 3 characters')
    .required('Required'),
  email: string().email('Invalid Email').required('Required'),
  message: string().required('Required'),
  subject: string().required('Required'),
});

export default validation;
