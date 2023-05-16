import React, { useState } from 'react'
import './User.css'

const UsersComponent = ({name, age, country, img}) => {
    
    return (
        <div className='user' >
            <img src={img} className="imgUser"/>
            <h2 className='name'>имя:{name}</h2>
            <p className='age'>возраст:{age}</p>
            
            <p className='country' >страна:{country}</p>
        </div>
    )
}

export default UsersComponent