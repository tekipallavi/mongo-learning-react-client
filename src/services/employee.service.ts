import api from './api';

const  getEmployee = async (employeeId:string) => {
    const {data} = await api.get(`/employee/${employeeId}`);
    return data;
}

export {getEmployee};