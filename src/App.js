import './App.css';
import {useState, useEffect} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import Login from './components/Login'
import Profile from './components/Profile'
import NewBlog from './components/NewBlog'

const BASE_API = 'http://localhost:5000'

function App(props) {

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

  const editPost = (newPost) => {
    const post = currentUser.posts.find(post => post._id == newPost._id)
    console.log(post)
    const postIndex = currentUser.posts.indexOf(post)
    console.log(postIndex)
    currentUser.posts.splice(postIndex, 1, newPost)
    setCurrentUser(currentUser)
  }

  const addPost = (newPost) => {
    currentUser.posts.push(newPost)
    setCurrentUser(currentUser)
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={() => <Login loginHandler={loginHandler}/>} />

        {currentUser ?
        <>
        <Route path="/profile" render={() => <Profile history={props.history} editPost={editPost} currentUser={currentUser}/> } />
        <Route path="/posts/new" render={() => <NewBlog addPost={addPost} currentUser={currentUser}/> } />
        </>
        :
        null}

      </Switch>
    </div>
  );

}

export default withRouter(App);
