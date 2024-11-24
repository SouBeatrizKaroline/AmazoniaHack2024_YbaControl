import React from 'react';

function ProducerList({ producers }) {
  return (
    <div>
      <h2>Lista de Produtores</h2>
      {producers.length === 0 ? (
        <p>Nenhum produtor cadastrado.</p>
      ) : (
        <ul>
          {producers.map((producer, index) => (
            <li key={index} className="producer-card">
              <h3>{producer.name}</h3>
              <p><strong>Localização:</strong> {producer.location}</p>
              <p><strong>Área Cultivada:</strong> {producer.area} ha</p>
              <p><strong>Práticas:</strong> {producer.practices}</p>
              {producer.image && <img src={producer.image} alt="Produtor" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProducerList;
