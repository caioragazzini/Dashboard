// src/components/JobList/JobList.js
import React from 'react';
import '../../styles/JobList.css'; // Importe o arquivo de estilos

const getJobItemColorClass = (percentual) => {
  if (percentual >= 10) {
    return 'job-item-red';
  } else if (percentual >= 5 && percentual <= 9) {
    return 'job-item-yellow';
  } else {
    return 'job-item-green';
  }
};

const JobList = ({ jobData }) => {
  return (
    <div className="job-list-container">
      {jobData.map((job, index) => (
        <div
          key={index}
          className={`job-item ${getJobItemColorClass(job.percentual)}`}
        >
        <p className="title"><strong>Nome do Servidor:</strong> {job.nomeDoServidor}</p>
        <p className="title"><strong>Total de Jobs:</strong> {job.totalDeJobs}</p>
        <p className="title"><strong>Total de Jobs por Servidor:</strong> {job.totalDeJobsPorServidor}</p>
        <p className="title"><strong>Percentual:</strong> {job.percentual}%</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
