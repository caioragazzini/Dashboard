// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import DescricaoProcessoPage from './components/ClasseProcesso/DescricaoProcessoPage';
import jobApi from './api/jobApi';
import jobApiNomeServidor from './api/jobApiNomeServidor';

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard data={jobsData} />} />
          <Route path="/DescricaoProcessoPage/:nomeDoServidor" element={<DescricaoProcessoPage jobApi={jobApiNomeServidor} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
