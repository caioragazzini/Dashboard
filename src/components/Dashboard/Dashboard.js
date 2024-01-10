import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import '../../styles/Dashboard.css';
import jobApi from '../../api/jobApi';

const Dashboard = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobApi.getJobs();
        console.log("@@@@@@@@jobData@@@@@@@@@@@@")
        console.log(jobData)
        setJobData(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    // Chama a função fetchData inicialmente
    fetchData();

    // Configura um intervalo para chamar a função fetchData a cada 5 minutos
    const intervalId = setInterval(() => {
      fetchData();
    }, 10 * 1000); // 5 minutos em milissegundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O segundo parâmetro do useEffect é um array de dependências, que está vazio para garantir que o efeito seja executado apenas uma vez no montante/desmontante do componente

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <JobList jobData={jobData} />
    </div>
  );
};

export default Dashboard;
