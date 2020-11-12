import * as yup from 'yup';

export const validationSchema = yup.object({
    username: yup
        .string()
        .typeError('Value must be your user name')
        .required('Field is required'),
    firstName: yup
        .string()
        .typeError('Value must be your first name')
        .required('Field is required'),
    lastName: yup
        .string()
        .typeError('Value must be a your last name')
        .required('Field is required'),
    email: yup
        .string()
        .email()
        .typeError('Value must be a your email')
        .required('Field is required'),
    password: yup
        .string()
        .typeError('Value must be a your email')
        .min(8, 'Password should contain at last 8 character')
        .required('Field is required'),
});
