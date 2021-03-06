import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user);

      if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       navigate('/home');
    }
    
    if(token){
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='w-50 mx-auto my-5'>
        <h2 className='text-warning text-center mb-3'>Please Register</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
              <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className='w-50 mx-auto d-block text-white fw-bold' variant="success" type="submit">
              Register
          </Button>
      </Form>
      <p className='text-center mt-2'>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-success pe-auto text-decoration-none' >Please Login</Link> </p>
            
        </div>
    );
};

export default Register;