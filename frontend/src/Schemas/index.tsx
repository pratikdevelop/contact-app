import * as Yup from 'yup';


export const ContactSchema = Yup.object({
    first_name: Yup.string().min(4).max(25).required('please enter the first name'),
    last_name: Yup.string().min(4).max(25).required('please enter the last name'),
    phone: Yup.number().min(10).required('please enter the mobile number'),
    address: Yup.string().max(20).required('please enter the address'),
    email: Yup.string().email().required('please enter the email'),
    status:  Yup.string().required('please choose the  status')})