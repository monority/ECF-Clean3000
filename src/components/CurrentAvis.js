import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CurrentAvis = () => {
    const { id } = useParams();
    const clients = useSelector(state => state.data.clients);
    const currentClient = clients.find(client => client.id === Number(id));

    return (
        <div>
            <Header />
            <div className="main">
                <div className="currentAvis">
                    <div className="container">
                        <h1>Votre avis de commande numéro : {id}</h1>
                        {currentClient && (
                            <div>
                                <h2>Client Details:</h2>
                                {currentClient.avisdepassage.map((avis, index) => (
                                    <div key={index}>
                                        <p>Name: {avis.name}</p>
                                        <p>Technicien: {avis.technicien}</p>
                                        <p>Date: {avis.date}</p>
                                        <p>Commentary: {avis.commentary}</p>
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
