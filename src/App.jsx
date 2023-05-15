import { useState } from 'react';
import './App.css'
import UsersComponent from './components/UsersComponent';
import { users } from './data/users';

function App() {
  const [adultsArr, SetAdultsArr] = useState(false);
  const [country, setCountry] = useState(null);

  const renderAdults = () => {
    switch (country) {
      case 'Kyrgyzstan':
        let adultsInKgz = users.filter(el => el.country === 'Kyrgyzstan')
        return adultsInKgz.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
      case 'Other':
        let adultsInOther = users.filter(el => el.country !== 'Kyrgyzstan')
        return adultsInOther.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
    }
  }
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
