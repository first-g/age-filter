import React, {useState} from 'react'
import { adults } from '../data/users';


const Adults = (props) => {
    return renderAdults = () => {
      switch (props.country) {
        case 'Kyrgyzstan':
          let adultsInKgz = adults.filter(el => el.country === 'Kyrgyzstan')
          return adultsInKgz.map((el) =>
            <div>
              <h2>{el.name}</h2>
              <p>{el.age}</p>
              <p>{el.country}</p>
            </div>
          )
        case 'Other':
          let adultsInOther = adults.filter(el => el.country !== 'Kyrgyzstan')
          return adultsInOther.map((el) =>
            <div>
              <h2>{el.name}</h2>
              <p>{el.age}</p>
              <p>{el.country}</p>
            </div>
          )
      }
    }
}

export default Adults