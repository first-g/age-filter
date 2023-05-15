import React from 'react'
import Css from './User.css'

const UsersComponent = ({name, age, country}) => {
    return (
        <div>
            <h2 className={Css.UserName}>{name}</h2>
            <p>{age}</p>
            <p>{country}</p>
        </div>
    )
}

export default UsersComponent