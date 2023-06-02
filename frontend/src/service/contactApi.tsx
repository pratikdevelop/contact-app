import axios from 'axios'

export const contactApi =  async() => {
        const response =  await axios.get(' http://localhost:8001/contacts');
        return response.data
}

export const addContactApi = async(formData: any) => {
    const response =await axios.post(' http://localhost:8001/contact', formData);
    return response.data
}