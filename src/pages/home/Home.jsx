import { AcUnit } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'
import './home.scss'
const Home = ({type}) => {

  const [lists,setLists] = useState([])
  const [genre,setGenre] = useState()

  useEffect(()=>{
     const getRandomLists = async () => {
       try{
         console.log(`lists${type ? "?type="+type : ""}${genre ? "&genre="+genre : ""}`);
          const res = await axios.get(`lists${type ? "?type="+type : ""}${genre ? "&genre="+genre : ""}`,{headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        }})
          setLists(res.data)
       }catch(err){
         console.log(err)
       }
     }
     getRandomLists()
  },[genre , type])

  console.log(lists);
  return (
  <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre= {setGenre}/>
      {lists.map((list)=>(
        <List list={list}/>
      ))}
  </div>
  );
};

export default Home;
