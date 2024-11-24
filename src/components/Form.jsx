import React, { useState } from 'react';

function Form({ producers, setProducers }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [practices, setPractices] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducer = { name, location, area, practices, image };
    setProducers([...producers, newProducer]);
    alert('Produtor cadastrado com sucesso!');
    setName('');
    setLocation('');
    setArea('');
    setPractices('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produtor</h2>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Localização:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <label>
        Área Cultivada (ha):
        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} required />
      </label>
      <label>
        Práticas Sustentáveis:
        <input type="text" value={practices} onChange={(e) => setPractices(e.target.value)} required />
      </label>
      <label>
        Foto do Produtor:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;
