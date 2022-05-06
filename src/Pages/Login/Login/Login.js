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
   
    if(password.length<6){
      setErr('Password should be at least 6 characters long.');
      return;
    }

    signInWithEmailAndPassword(email, password);
  }

  const resetPassword = async (event) => {
   
    const email = emailRef.current.value;
    // console.log(email);
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
        <div>
          <h2>Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Control type="email" ref={emailRef} name="email" required placeholder="Enter email" />

              <Form.Control type="password" required name="password" placeholder="Password" />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className='text-danger mt-1'>{err} {errorElement}</p>
            <p className='mt-2'>New to Happy Clicking? <Link to="/register" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgot password?<Button className='bg-color ms-2' onClick={resetPassword}>Reset Password</Button></p>
              <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;