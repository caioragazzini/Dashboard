// No arquivo components/MenuLateral/MenuLateral.jsx
import React, { useState, useEffect } from 'react';
import jobApiTotal from '../../api/jobApiTotal';
import '../../styles/MenuLateral.css';

const MenuLateral = () => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const [data] = await jobApiTotal.getTotalJobs();
        setMenuData(data);
      } catch (error) {
        console.error('Erro ao obter dados do menu lateral:', error);
      }
    };

   
    fetchMenuData();
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
            <td>Servidores Suportados:</td>
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
