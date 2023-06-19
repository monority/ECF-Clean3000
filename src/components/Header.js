import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const generateId = () => {
        return Math.floor(Math.random() * 100);
    };
    const createNewOrder = () => {
        const newId = generateId();
        navigate(`/order/${newId}`);
    };

    const navigate = useNavigate();
    return (
        <div className='AppHeader'>
            <div className="nav">

                <div className="container">
                    <img src={`${process.env.PUBLIC_URL}/media/logo-clean3000-transparent.png`} alt=""  onClick={() => navigate("/")}/>
                    <ul>
                        <li onClick={() => navigate("/")}>Accueil</li>
                        <li onClick={() => createNewOrder()}>Avis de Passage</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header