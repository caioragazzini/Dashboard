// src/components/JobList/JobList.js
import React, { useState } from 'react';
import '../../styles/JobList.css';
import { useNavigate } from 'react-router-dom';



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
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    setSelectedJob(job);
    navigate(`/DescricaoProcessoPage/${job.nomeDoServidor}`);
  };

  return (
    <div className="job-list-container">
      {jobData.map((job, index) => (
        <button
          key={index}
          className={`job-item ${getJobItemColorClass(job.percentual)}`}
          onClick={() => handleJobClick(job)}
        >
          <p className="title"><strong>Nome do Servidor:</strong> {job.nomeDoServidor}</p>
          <p className="title"><strong>Max Jobs:</strong> {job.maxJobs}</p>
          <p className="title"><strong>Full Jobs:</strong> {job.fullJobs}</p>
          <p className="title"><strong>Total De Jobs Por Servidor:</strong> {job.totalDeJobsPorServidor}</p>
          <p className="title"><strong>Percentual:</strong> {job.percentual}%</p>
        </button>
      ))}
    </div>
  );
};

export default JobList;
