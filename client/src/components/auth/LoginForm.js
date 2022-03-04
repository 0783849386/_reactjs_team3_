import { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';

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
        <div className='col-md-4 mt-5'>
            <h4>Login</h4>
            <Form className="signin-From">
            <Form.Group>
                <Form.Control
                    type='text'
                    className="input-group"
                    placeholder='Username'
                    name='email'
                    required
                    value={email}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='password'
                    placeholder='Passwword'
                    name='password'
                    required
                    value={password}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default LoginFrom