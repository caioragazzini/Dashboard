// src/pages/DescricaoProcessoPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DescricaoProcessoPage = () => {
  const [data, setData] = useState([]);
  const { nomeDoServidor } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:44359/Job/GetJobsId?nomedoservidor=${nomeDoServidor}`);
        const jsonData = response.data;
        console.log("######## DATA#######",response.data);
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, [nomeDoServidor]);

  return (
    <div>
      <h1>Resultado para {nomeDoServidor}</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Nome do Servidor:</strong> {item.nomeDoServidor}, <strong>Classe de Processo:</strong> {item.classeProcesso}, <strong>QTDREGISTROS:</strong> {item.quantidadeRegistros}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescricaoProcessoPage;
