import api from './api';

const  getProjects = async (techStack:[]) => {
    const {data} = await api.post(`/project/getProjects`, {techStack});
    return data;
}

export {getProjects};