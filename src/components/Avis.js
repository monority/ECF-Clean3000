import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import clients from "../clients";
import techniciens from '../techniciens';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addAvis } from '../slices';


const Avis = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const [addClientArray, setClientArray] = useState({
    name: "",
    technicien: "",
    date: "",
    commentary:"",
  });

  const addClient = () => {
    dispatch(addAvis(addClientArray));
  };

  const addNameClient = (e) => {
    const copyItem = addClientArray;
    setClientArray({ ...copyItem, name: e.target.value });
  };

  const addTechnicianName = (e) => {
    const copyItem = addClientArray;
    setClientArray({ ...copyItem, technicien: e.target.value });
  };

  const addDate = (date, dateString) => {
    const copyItem = addClientArray;
    setClientArray({ ...copyItem, date: dateString });
  };
  const addCommentary = (e) => {
    const copyItem = addClientArray;
    setClientArray({ ...copyItem, commentary: e.target.value });
  };

  const clientList = clients.map(client => {
    return (
      <option key={client.id} value={client.name}>
        {client.name}
      </option>
    );
  });

  const technicienList = techniciens.map(technicien => {
    return (
      <option key={technicien.id} value={technicien.name}>
        {technicien.name}
      </option>
    );
  });

  return (
    <div>
      <Header />
      <div className="order">
        <div className="container">
          <div className="wrappers">
            <h1>Votre avis de passage est le numéro {id}</h1>
            <div className="wrapper">
              <label htmlFor="clientSelect">Nom de l'entreprise ou du client :</label>

              <select id="clientSelect" name='client' onChange={addNameClient}>
                <option value=""></option>
                {clientList}
              </select>
              <label htmlFor='date' name='date'>Notre technicien est intervenu le : </label>
              <DatePicker format={JSON.stringify} name='date' onChange={addDate} />
            </div>
            <div className="wrapper">
              <p>Observations pendant l'intervention :</p>
              <textarea onChange={addCommentary}></textarea>
              <label htmlFor="technicienSelect" name='technicianName'>Nom du technicien :</label>
              <select id="technicienSelect" name='technicianName' onChange={addTechnicianName}>
                <option value=""></option>
                {technicienList}
              </select>
            </div>
            <p className="myButton" onClick={addClient}>Valider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
