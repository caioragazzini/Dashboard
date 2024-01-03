// api/jobApi.js
const API_BASE_URL = 'https://localhost:44359/Job';

const getJobs = async () => {
  try {
    
    const response = await fetch(`${API_BASE_URL}/GetAllJobs`);
    console.log("****************************************************************");
    console.log(response);
    console.log("****************************************************************");
    const jsonData = await response.json();

    console.log("****************************************************************");
    console.log(jsonData);
    console.log("****************************************************************");
    return jsonData;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};

export default {
  getJobs,
};
