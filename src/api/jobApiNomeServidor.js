// api/jobApiNomeServidor.js
const API_BASE_URL = 'https://localhost:44359/Job';

const getJobsNomeServidor = async (nomeDoServidor) => {
  try {
    const response = await fetch(`${API_BASE_URL}/GetJobsId?nomedoservidor=${nomeDoServidor}`);
    console.log("****************************************************************");
    console.log(response);

    if (!response.ok) {
      throw new Error(`Erro ao obter dados da API: ${response.statusText}`);
    }

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

const jobApiNomeServidor = {
    getJobsNomeServidor,
  };
  
  export default jobApiNomeServidor;