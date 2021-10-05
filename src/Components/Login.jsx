import React from 'react'
// import './Login.css'

function Login() {
    return (
        <div className="ui main">
            <h2>Login</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label> Email</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>
            </form>
             
        </div>
    )
}

export default Login
