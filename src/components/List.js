import React from 'react'

const List = ({name , technicien, date , commentary , id }) => {
  return (
    <div>
        <p>{id}</p>
        <p>Nom du client : {name}</p>
        <p>Nom du technicien : {technicien}</p>
        <p>Date de l'intervention : {date}</p>
        <p>Commentaire(s) : {commentary}</p>
    </div>
  )
}

export default List