import React from 'react';

function Report({ producers }) {
  const handleDownloadJSON = () => {
    const data = JSON.stringify(producers, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'producers_report.json';
    link.click();
  };

  return (
    <div>
      <h2>Relatório de Produtores</h2>
      <p><strong>Total de Produtores:</strong> {producers.length}</p>
      <button onClick={handleDownloadJSON}>Baixar Relatório (JSON)</button>
    </div>
  );
}

export default Report;
