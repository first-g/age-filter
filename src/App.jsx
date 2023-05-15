import { useState } from 'react'
import './App.css'
import { adults } from './data/users'
import Users from './components/Users';

function App() {
  // _____________________________________Кому старше 18
  const [adultsArr, SetAdultsArr] = useState(false);
  const [country, setCountry] = useState(null);

  const renderAdults = () => {
    switch (country) {
      case 'Kyrgyzstan':
        let adultsInKgz = adults.filter(el => el.country === 'Kyrgyzstan')
        return adultsInKgz.map((el) =>
          <Users name={el.name} age={el.age} country={el.country} />
        )
      case 'Other':
        let adultsInOther = adults.filter(el => el.country !== 'Kyrgyzstan')
        return adultsInOther.map((el) =>
          <Users name={el.name} age={el.age} country={el.country} />
        )
    }
  }
  // _____________________________________Кому старше 18
  return (
    <div className='App'>
      <div className="buttons">

        <div className='adults'>
          <button onClick={() => SetAdultsArr(!adultsArr)}>Кому старше 18</button>
          {adultsArr &&
            <>
              <button onClick={() => setCountry('Kyrgyzstan')}>Кто в Кыргызстане</button>
              <button onClick={() => setCountry('Other')}>Кто в другой стране</button>
            </>
          }
        </div>
        
        <div className="teens">
          <button>Кому меньше 18</button>
        </div>

      </div>

      <div className='users'>
        {renderAdults()}
      </div>
    </div>
  )
}

export default App
