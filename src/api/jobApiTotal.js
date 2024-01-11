// No arquivo api/jobApi.js
const API_BASE_URL = 'https://localhost:44359/Job';

const getTotalJobs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/GetTotalJobs`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};

export default {
  getTotalJobs,
};
