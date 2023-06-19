import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createAvis } from '../slices'
import { useDispatch } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const generateId = () => {
        return Math.floor(Math.random() * 100);
    };
    const createNewOrder = () => {

        const newId = generateId();
        dispatch(createAvis(newId));
        navigate(`/order/${newId}`);
    };


    return (
        <div className='AppHeader'>
            <div className="nav">

                <div className="container">
                    <img src={`${process.env.PUBLIC_URL}/media/logo-clean3000-transparent.png`} alt="" />
                    <ul>
                        <li onClick={() => navigate("/")}>Accueil</li>
                        <li onClick={() => createNewOrder()}>Avis de Passage</li>
                        <li onClick={() => navigate("/listAvis")}>Liste des avis</li>
                    </ul>
                </div>
            </div>
            <hr />

        </div>
    )
}

export default Header