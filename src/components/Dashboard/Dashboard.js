// Alguma página ou componente onde você deseja exibir a lista de jobs
import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import '../../styles/Dashboard.css';


const Dashboard = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44359/Job/GetAllJobs');
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
    <h1 className="dashboard-title">Dashboard</h1>
    <JobList jobData={jobData} />
  </div>
  );
};

export default Dashboard;
