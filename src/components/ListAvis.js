import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const ListAvis = () => {
  const clients = useSelector((state) => state.data.clients);
  const print = () => window.print();
  const listAvis = () => {
    return (
      clients.map((client) => (
        <div key={client.id}>
          <h2>Avis de passage numéro : <strong>{client.id}</strong></h2>
          {client.avisdepassage.map((avis, index) => (
            <div key={index}>
              <p><strong>Nom</strong> : {avis.name}</p>
              <p><strong>Technicien</strong> :{avis.technicien}</p>
              <p><strong>Date</strong> : {avis.date}</p>
              <p><strong>Observation(s)</strong> : {avis.commentary}</p>
            </div>
          ))}
        </div>
      ))
    )
  }


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
