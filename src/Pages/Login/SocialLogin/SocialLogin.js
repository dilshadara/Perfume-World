import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google.png';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    

    if(loading){
        return <Loading></Loading>
    }

    
    if(user){
        navigate('/home');
    }


    let errorElement;
    if(error){
        errorElement=<p className='text-danger'>{error?.message}</p>
    }

    

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-75 d-block mx-auto my-2' style={{backgroundColor: '#F2F2F2'}}>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
              
                
            </div>
        </div>
    );
};

export default SocialLogin;