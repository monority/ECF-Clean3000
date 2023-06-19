import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const ListAvis = () => {
  const clients = useSelector((state) => state.data.clients);
  const print = () => window.print();
  const listAvis = () => {
    return clients.map((client) => {
      if (client.avisdepassage.length > 0) {
        return (
          <div key={client.id}>
            <h2>Avis de passage numéro : <strong>{client.id}</strong></h2>
            {client.avisdepassage.map((avis, index) => {
              const { name, technicien, date, commentary } = avis;
              if (name) {
                return (
                  <div key={index}>
                    <p><strong>Nom</strong> : {name}</p>
                    {technicien && <p><strong>Technicien</strong> : {technicien}</p>}
                    {date && <p><strong>Date</strong> : {date}</p>}
                    {commentary && <p><strong>Observation(s)</strong> : {commentary}</p>}
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <Header />
      <div className="main">
        <div className="currentAvis">
          <div className="container">
            <h1>Avis de Passage</h1>
            {listAvis()}
            <button className="printButton" onClick={print}>
              Imprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAvis;
