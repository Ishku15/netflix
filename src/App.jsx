import Home from "./pages/home/Home";
import './app.scss'
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {BrowserRouter as Router , Routes , Route, Navigate} from 'react-router-dom'
  import { formatMs } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import {AuthContext} from './authContext/AuthContext'
const App = () => {

  const {user} = useContext(AuthContext)
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Navigate to='/register'/>}/>
        <Route path="/movies" element={user ? <Home type="movies"/>: <Navigate to='/register'/>}/>
        <Route path="/series" element={user ? <Home type="series"/>: <Navigate to='/register'/>}/>
        <Route path="/watch" element={user ? <Watch />: <Navigate to='/register'/>}/>
        <Route  path="/login" element={!user ?<Login/> : <Navigate to='/'/>}/>
        <Route  path="/register" element={!user ? <Register/> : <Navigate to='/'/>}/>

      </Routes>
    </Router>
      
    </>
  );
};

export default App;