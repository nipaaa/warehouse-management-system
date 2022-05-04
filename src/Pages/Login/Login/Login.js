import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        //signInWithEmailAndPassword(email, password)
        
    }

    const navigateSignUp = event => {
        Navigate('/register')
    }
    return (
        <div className='w-50 mx-auto mb-5'>
             <h2 className='text-warning text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='mb-3' variant="warning" type="submit">
                    Login
                </Button>
            </Form>

            <p>New to this site? <Link to="/register" onClick={navigateSignUp} className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
            
        </div>
    );
};

export default Login;