import './App.css';
import {useState, useEffect} from 'react'

import Login from './components/Login'
import Profile from './components/Profile'

const BASE_API = 'http://localhost:5000'

function App() {

  const [currentUser, setCurrentUser] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem("token")

    if(token) {
      fetch(`${BASE_API}/users/profile`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCurrentUser(data)
      })
      .catch(error => console.log(error))
    }
  }, [])


  const loginHandler = (userInfo) => {
    fetch(`${BASE_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(data => {
      localStorage.setItem("token", data.accessToken)
      setCurrentUser(data.user)
    })
  }

  console.log(currentUser)

  return (
    <div className="App">
      <Login loginHandler={loginHandler}/>
      {currentUser ? 
      <Profile currentUser={currentUser}/>
      :
      null}
    </div>
  );

}

export default App;
