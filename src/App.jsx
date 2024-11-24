import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import ProducerList from './components/ProducerList';
import Report from './components/Report';

function App() {
  const [producers, setProducers] = useState([]);

  // Recuperar dados do localStorage ao carregar
  useEffect(() => {
    const storedProducers = JSON.parse(localStorage.getItem('producers')) || [];
    setProducers(storedProducers);
  }, []);

  // Atualizar localStorage quando os produtores mudarem
  useEffect(() => {
    localStorage.setItem('producers', JSON.stringify(producers));
  }, [producers]);

  return (
    <div className="App">
      <header>
        <h1>YbáControl</h1>
        <nav>
          <ul>
            <li><Link to="/">Cadastro</Link></li>
            <li><Link to="/producers">Produtores</Link></li>
            <li><Link to="/report">Relatório</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Form setProducers={setProducers} producers={producers} />} />
          <Route path="/producers" element={<ProducerList producers={producers} />} />
          <Route path="/report" element={<Report producers={producers} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
