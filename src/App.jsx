import { useState } from 'react';
import './App.css'
import UsersComponent from './components/UsersComponent';
import { users } from './data/users';

function App() {
  const [showAdults, SetShowAdults] = useState(false);
  const [showOld24, SetShowOld24] = useState(false);
  const [showAdults18, SetShowAdults18] = useState(false);
  const [showAll, setShowAll]= useState(false)

  
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
      case 'old24inKG':
        let old24InKgz = users.filter(el => el.country === 'Kyrgyzstan' && el.age > 24)
        return old24InKgz.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
      case 'old24inOther':
      let old24InOther = users.filter(el => el.country !== 'Kyrgyzstan' && el.age > 24)
      return old24InOther.map((el) =>
        <UsersComponent name={el.name} age={el.age} country={el.country} />
      )
        case 'adults18_24inKG18':
        let adultsInKgz18 = users.filter(el => el.country === 'Kyrgyzstan' && el.age < 18)
        return adultsInKgz18.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
      case 'adults18_24Other18':
        let adultsInOther18 = users.filter(el => el.country !== 'Kyrgyzstan' && el.age < 18)
        return adultsInOther18.map((el) =>
          <UsersComponent name={el.name} age={el.age} country={el.country} />
        )
      case 'All':
        return users.map((el) => 
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
          <button onClick={() => SetShowAdults18(!showAdults18)}>Кому меньше 18</button>
          <br />
          <br />
          <br />
          {showAdults18 &&
            <>
              <button onClick={() => setParams('adults18_24inKG18')}>Кто в Кыргызстане</button>
              <button onClick={() => setParams('adults18_24Other18')}>Кто в другой стране</button>
            </>
          }
        </div>

        <div className="olds">
          <button onClick={() => SetShowOld24(!showOld24)}>Кому больше 24</button>
          {showOld24 && 
              <>
                <button onClick={() => setParams('old24inKG')}>Кто в Кыргызстане</button>
                <button onClick={() => setParams('old24inOther')}>Кто в другой стране</button>
              </>
          }
        </div>

        <div className="all">
          <button onClick={() => setParams('All')}>Показать всех</button>
        </div>

      </div>

      <div className='users'>
        {renderUsers()}
      </div>
    </div>
  )
}

export default App
