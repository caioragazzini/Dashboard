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
      <table>
        <thead>
          <tr>
            <th>Agendamento</th>
            <th>Classe de Processo</th>
            <th>Nome do Servidor</th>
            <th>ID do Job</th>
            <th>Código da Coligada</th>
            <th>Nome</th>
            <th>Data de Início da Execução</th>
            <th>ID do Processo</th>
            <th>Tempo de Execução (minutos)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.agendamento}</td>
              <td>{item.classeProcesso}</td>
              <td>{item.nomeDoServidor}</td>
              <td>{item.idJob}</td>
              <td>{item.codColigada}</td>
              <td>{item.nome}</td>
              <td>{item.dataIniExec}</td>
              <td>{item.processId}</td>
              <td>{item.tempoExecucaoMin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DescricaoProcessoPage;
