import React, { useState } from 'react'
import './User.css'

const UsersComponent = ({name, age, country, img}) => {
     const[Open, SetOpen] = useState()
     
        const ShowProf =()=>{
           return (
              <div>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>{age}</p>
                 <p>{country}</p>
              </div>
           );
    }
    return (
        <div className='user' onClick={()=>SetOpen(true)}>
            <img src={img} className="imgUser"/>
            <h2 className='name'>имя:{name}</h2>
            <p className='age'>возраст:{age}</p>
            
            <p className='country' >страна:{country}</p>
        </div>
    )
}

export default UsersComponent