import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='mb-3 d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-secondary w-50'></div>
                <div className='mx-2 mb-2'>or</div>
                <div style={{ height: "1px" }} className='bg-secondary w-50'></div>

            </div>
            {errorMessage}

            <div>
                <Button onClick={() => signInWithGoogle()} className='w-50 d-block mx-auto mb-5' variant="success" type="submit">
                    <i className="text-warning fa-brands fa-google"></i>  Sign in with Google
                </Button>
            </div>



        </div>
    );
};

export default SocialLogin;