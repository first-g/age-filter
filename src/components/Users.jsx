import React from 'react'

const Users = ({name, age, country}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{country}</p>
        </div>
    )
}

export default Users