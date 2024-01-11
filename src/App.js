// No arquivo App.js ou em um componente de layout principal
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import DescricaoProcessoPage from './components/ClasseProcesso/DescricaoProcessoPage';
import MenuLateral from './components/MenuLateral/menuLateral';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Renderize o MenuLateral à esquerda da página */}
        <MenuLateral />

        {/* Área de conteúdo principal */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/DescricaoProcessoPage/:nomeDoServidor" element={<DescricaoProcessoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
