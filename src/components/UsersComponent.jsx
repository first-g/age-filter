import React from 'react'
import Css from './User.css'

const UsersComponent = ({name, age, country}) => {
    return (
        <div className='user'>
            <h2 className='name'>имя:{name}</h2>
            <p className='age'>возраст:{age}</p>
            
            <p className='country'>страна:{country}</p>
        </div>
    )
}

export default UsersComponent