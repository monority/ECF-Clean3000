import React from 'react'

const Card = ({ text, title }) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <p>{text}</p>

        </div>
    )
}

export default Card