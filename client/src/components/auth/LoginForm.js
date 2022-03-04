import { Button, Col, Row, Form } from 'react-bootstrap';

const LoginFrom = () => {

    return (
        <div className='col-md-4 '>
            <Form className="signin-From">
                <div className="From-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default LoginFrom