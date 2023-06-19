import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CurrentAvis = () => {
    const { id } = useParams();
    const clients = useSelector(state => state.data.clients);
    const currentClient = clients.find(client => client.id == id);

    return (
        <div>
            <Header />
            <div className="main">
                <div className="currentAvis">
                    <div className="container">
                        <h1>Votre avis de commande numéro : {id}</h1>
                        {currentClient && (
                            <div>
                                <h2>Détails de l'avis de passage</h2>
                                {currentClient.avisdepassage.map((avis, index) => (
                                    <div key={index}>
                                        <p><strong>Votre nom</strong> : {avis.name}</p>
                                        <p><strong>Technicien </strong> : {avis.technicien}</p>
                                        <p><strong>Date </strong> : {avis.date}</p>
                                        <p><strong>Observation(s) </strong> : {avis.commentary}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentAvis;
