import React, { useState, useEffect } from 'react';
import jobApiTotal from '../../api/jobApiTotal';
import '../../styles/MenuLateral.css';

const MenuLateral = () => {
  const [menuData, setMenuData] = useState({});

  const fetchData = async () => {
    try {
      const [data] = await jobApiTotal.getTotalJobs();
      setMenuData(data);
    } catch (error) {
      console.error('Erro ao obter dados do menu lateral:', error);
    }
  };

  useEffect(() => {
    
    fetchData();

   
    const intervalId = setInterval(() => {
      fetchData();
    }, 5 * 1000);

    
    return () => clearInterval(intervalId);
  }, []); 

  useEffect(() => {
    console.log("MenuLateral atualizado:", menuData);
  }, [menuData]);

  return (
    <div className="sidebar">
      <h2>Total Jobs</h2>
      <table className="sidebar-table">
        <tbody>
          <tr>
            <td>Total de Jobs Suportados:</td>
            <td>{menuData.suportadoServidores}</td>
          </tr>
          <tr>
            <td>Total em Execução:</td>
            <td>{menuData.totalExecucao}</td>
          </tr>
          <tr>
            <td>Fila de Espera:</td>
            <td>{menuData.filaEspera}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MenuLateral;
