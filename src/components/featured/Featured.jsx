import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './featured.scss'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Featured = ({type , setGenre}) => {
    const [movie, setMovie] = useState({})


    useEffect(()=>{
        const getRandMovie = async () => {
            try{const res = await axios.get(`/movies/random?type=${type}`,{headers: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
            }})
            setMovie(res.data[0])}catch(err){
                console.log(err)
            }
        }
        getRandMovie()
    },[type])
  return (
      <div className="featured">
          {type && (
              <div className="category">
                  <span>{type === 'movies' ? "Movie" : "Series" }</span>
                  <select name="genre" id="genre" className="genre" onChange={e=>setGenre(e.target.value)}>
                      <option value="adventure">Adventure</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="historical">Historical</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-fi</option>
                      <option value="western">Western</option>
                      <option value="animation">Animation</option>
                      <option value="Action">Action</option>
                      <option value="documentary">Documentary</option>

                  </select>
              </div>
          )}
          <img src={movie.img} alt="" />
      <div className="info">
          <img src={movie.imgTitle} alt="" />
          <span className="desc">{movie.desc}</span>
          <div className="buttons">
              <Link to='/watch' state={{movie:movie}} className='link'><button className="play"><PlayArrow/><span>play</span></button></Link>
              <button className="more"><InfoOutlined/><span>Info</span></button>
          </div>
      </div>
      </div>
  );
};

export default Featured;
