// src/pages/DescricaoProcessoPage.js
import React, { useEffect, useState } from 'react';
import jobApiNomeServidor from '../../api/jobApiNomeServidor';
import { useParams } from 'react-router-dom';
import '../../styles/DescricaoProcessoPage.css';

const DescricaoProcessoPage = () => {
  const [data, setData] = useState([]);
  const { nomeDoServidor } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await jobApiNomeServidor.getJobsNomeServidor(nomeDoServidor);
        const jsonData = response;
        console.log("######## DATA#######", response);
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, [nomeDoServidor]);

  return (
    <div className="container">
    <h1>Resultado para o servidor: {nomeDoServidor}</h1>
    <ul>
  {data.map((item, index) => (
    <li key={index}>
      <p><strong>Classe de Processo:</strong> {item.classeProcesso}</p>
      <p><strong>Quantidade de Registros:</strong> {item.quantidadeRegistros}</p>
    </li>
  ))}
</ul>
  </div>
  );
};

export default DescricaoProcessoPage;
