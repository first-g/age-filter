import { useState } from 'react';
import './App.css'
import UsersComponent from './components/UsersComponent';
import { users } from './data/users';

function App() {
  const [showAdults, SetShowAdults] = useState(false);
  const [params, setParams] = useState(null);

  const renderUsers = () => {
    switch (params) {
      case 'adults18_24inKG':
        let adultsInKgz = users.filter(el => el.country === 'Kyrgyzstan' && el.age > 18 && el.age < 24)
        return adultsInKgz.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
      case 'adults18_24Other':
        let adultsInOther = users.filter(el => el.country !== 'Kyrgyzstan' && el.age > 18 && el.age < 24)
        return adultsInOther.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
    }
  }
  return (
    <div className='App'>
      <div className="buttons">

        <div className='adults'>
          <button onClick={() => SetShowAdults(!showAdults)}>Кому больше 18 и меньше 24</button>
          {showAdults &&
            <>
              <button onClick={() => setParams('adults18_24inKG')}>Кто в Кыргызстане</button>
              <button onClick={() => setParams('adults18_24Other')}>Кто в другой стране</button>
            </>
          }
        </div>
        
        <div className="teens">
          <button>Кому меньше 18</button>
        </div>

      </div>

      <div className='users'>
        {renderUsers()}
      </div>
    </div>
  )
}

export default App
