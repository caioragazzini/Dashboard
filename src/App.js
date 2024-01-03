// App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard'; // Corrigir o caminho do componente Dashboard
import jobApi from './api/jobApi'; // Corrigir o caminho do arquivo jobApi

function App() {
  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobApi.getJobs();
        setJobsData(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Dashboard data={jobsData} />
    </div>
  );
}

export default App;
