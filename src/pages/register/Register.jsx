import React, { useRef, useState  } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import "./register.scss"
import axios from 'axios'


const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e) => {
        e.preventDefault()
        setPassword(passwordRef.current.value)
        try{
            await axios.post('auth/register' , {email,password})
            history('/login')
        }catch(err){
            console.log(err);
        }
    }
  return (
      <div className="register">
          <div className="top">
              <div className="wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" className='logo' />
              <Link to='/login'>
              <button className="loginButton">Sign In</button>
              </Link>
              </div>
          </div>
          <div className="container">
              <h1>Unlimited Movies , Tv Shows and more.</h1>
              <h2>Watch anywhere. Cancel Anytime</h2>
              <p>
                  Ready to watch ? Enter your Email to create or restart your membership.
              </p>{
                  !email ? (

                <div className="input">
                    <input type="email" ref={emailRef} placeholder='Email Address' />
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>

                  ) : (
                    <form className="input">
                    <input type="password" ref={passwordRef} placeholder='Password' />
                    <button className="registerButton" onClick={handleFinish}>Start Membership</button>
                    </form>
                  )
              }
          </div>
      </div>
  );
};

export default Register;
