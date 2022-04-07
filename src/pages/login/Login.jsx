import { Link } from "react-router-dom";
import {useContext ,useState} from 'react'
import {AuthContext} from '../../authContext/AuthContext'
import "./login.scss"
import {loginCall} from '../../authContext/ApiCalls'

const Login = () => {
    const {user , dispatch} = useContext(AuthContext)
    const [email,setEmail] = useState()
    const [password,setPassword] =  useState()
    const handleLogin = (e) => {
        e.preventDefault()
        loginCall({email,password} , dispatch)
    }
  return (
      <div className="login">
          <div className="top">
              <div className="wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" className='logo' />
              </div>
          </div>
          <div className="container">
              <form>
                  <h1>Sign In</h1>
                  <input type="email" placeholder="Email" onChange={e=> setEmail(e.target.value)}/>
                  <input type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
                  <button className="loginButton" onClick={handleLogin}>Sign In</button>
                  <Link to='/register' className="link"><span>New to Netflix ? <b>Sign Up now.</b> </span></Link>
              </form>
          </div>  
      </div>
  );
};

export default Login;
