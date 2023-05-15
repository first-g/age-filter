import React from 'react'
import Css from './User.css'
const Users = ({name, age, country}) => {
    return (
        <div>
            <h2 className={Css.UserName}>{name}</h2>
            <p>{age}</p>
            <p>{country}</p>
        </div>
    )
}

export default Users