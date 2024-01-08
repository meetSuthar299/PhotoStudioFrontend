import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/Projects/`

// Create New Project
const createProject = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};
// Get all Project
const getProjects = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Delete a Project
const deleteProject = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
};
// Get a Project
const getProject = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
};

// Update Project
const updateProject = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data;
};
const ProjectService = {
    createProject,
    getProject,
    getProjects,
    deleteProject,
    updateProject,
  };

  export default ProjectService;