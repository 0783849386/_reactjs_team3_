import { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import './LoginForm.css' ;

const LoginFrom = () => {
    // Local state
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: ''
	})
    const { email, password } = loginForm

    const onChangeLoginForm = event =>
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    
    return (

        <>
        <div className="login">
        <div className="form-login">
        <div className="frontpager">Sign In</div>
        <div className="form-field">
          <input type="text" className="form-input" placeholder=" " id="username" name="username" />
          <label for="name" form="form-label"> Username </label>
       
        </div>
        <div className="form-field">
          <input className="form-input" placeholder=" " id="password" name="password" />
          <label for="name" form="form-label"> Password </label>
          <span>
            <i className="far fa-eye"></i>
          </span>
        </div>
        <button className="form-btn" onclick="handleSubmit()">Login</button>
        <div className="form-register">
          <span>Forgot your password?</span>
        </div>
      </div>
            </div>
        
        </>
        
    )
}

export default LoginFrom