import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Order = () => {

  const { id } = useParams()
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="wrappers">
            <h1>Votre avis de passage est le numéro {id}</h1>
            <h3>Nom de l'entreprise ou du client </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order