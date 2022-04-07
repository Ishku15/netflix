import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import './listitem.scss'
const ListItem = ({index , item}) => {

  const [isHovered , setIsHovered] = useState(false)
  const [movie,setMovie] = useState({})
  useEffect(()=>{
    const getMovie = async () =>{
      try{
          const res = await axios.get('movies/find/'+item,{headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        }})

          setMovie(res.data)

      }catch(err){
        console.log(err)
      }
    }
    getMovie()
  },[item])

  return (
      <Link to={'/watch'} state={{movie:movie}} className='link'>
      <div className="listItem" onMouseEnter={()=>{
        setIsHovered(true)
      }} onMouseLeave={()=>{
        setIsHovered(false)
      }}
      style = {{left: isHovered && (((index * 225) - 50) + (index  * 2.5))}}
      >
         <img src={movie.img} alt="" />
         {isHovered && (
           <> 
          <ReactPlayer url={movie.trailer}  loop={true} width="100%" height="140px" className='video' playing={true}/>
          <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon' />
            <Add className='icon' />
            <ThumbUpAltOutlined className='icon' />
            <ThumbDownAltOutlined className='icon' />
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className='limit'>{movie.limit}+</span>
            <span className='year'>{movie.year}</span>
            <span>{movie.genre}</span>
          </div>
          <div className="desc">{movie.desc}</div>
        </div>
        </>
          )}
      </div>
          </Link>
  );
};

export default ListItem;
