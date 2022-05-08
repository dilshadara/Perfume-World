import { Form, Button } from "react-bootstrap";
import React,{useState,useRef} from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail  } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
  const [err, setErr]=useState('');
  const emailRef = useRef('');
  let errorElement;
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate('/register');
  }

  const location =useLocation();
  let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending,errorResetPassword] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  } 

  if (error) {
    errorElement = <p className='text-danger'>{error?.message}</p>
  }

  if (errorResetPassword) {
    errorElement = <p className='text-danger'>{error?.message}</p>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email=event.target.email.value;
    const password = event.target.password.value;

    // console.log(email,password);
   
    if(password.length<6){
      setErr('Password should be at least 6 characters long.');
      return;
    }

    signInWithEmailAndPassword(email, password);
  }

  const resetPassword = async (event) => {
   
    const email = emailRef.current.value;
  
    if(email){
      await sendPasswordResetEmail(email);
      // toast('Sent email');
      alert('Sent email');
    }
    else{
      alert('please enter your email address');
      // toast('please enter your email address');
    }
  }

    return (
        <div className='container w-25 mx-auto border rounded mt-3 mb-5  login' >
          <h2 className='text-center pt-2 text-color'>Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Control type="email" ref={emailRef} name="email" required placeholder="Enter email" className='mb-3'/>

              <Form.Control type="password" required name="password" placeholder="Enter Password" className='mb-3'/>
              <Button variant="primary" type="submit" className='w-75'>
                Log In
              </Button>
            </Form>
            <p className='text-danger mt-1'>{err} {errorElement}</p>
            <p className='mt-2'>New to Perfume World? <Link to="/register" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgot password?<Button className='bg-color ms-2' onClick={resetPassword}>Reset Password</Button></p>
              <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;