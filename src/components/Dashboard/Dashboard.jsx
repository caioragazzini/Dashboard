// No arquivo components/Dashboard/Dashboard.jsx
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
        setJobData(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

   
    fetchData();

    
    const intervalId = setInterval(() => {
      fetchData();
    }, 5 * 1000); 
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Área de conteúdo principal */}
      <div className="content">
        <h1 className="dashboard-title">Dashboard</h1>
        <JobList jobData={jobData} />
      </div>
    </div>
  );
};

export default Dashboard;
