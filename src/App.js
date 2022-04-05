import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import WelcomePage from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent';

function App() {

  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  const [user, setUser] = useState('')

  return (

    <div className="App">
        
      <div >  

        {isLoggedIn ? 
        
          <WelcomePage user={user}  setIsLoggedIn={setIsLoggedIn}/>

          :

          <GetUserComponent  setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      
        } 

      </div>
        
    </div>

  )
}

export default App;
