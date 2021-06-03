import React, {useState} from 'react';

import Button from 'react-bootstrap/Button'

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userNameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.loginHandler({
            username: username,
            password: password
        })
        props.history.push("/profile")
    }

    return (
        <div className="login-form">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" value={username} onChange={userNameHandler}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={passwordHandler}/>
                </div>
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

export default Login