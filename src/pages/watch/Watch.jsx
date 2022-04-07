import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import video from '../../video/spiderman.mp4'
import './watch.scss'
const Watch = () => {

  const location = useLocation()
  const movie = location.state.movie
  return (
      <div className="watch">
          <Link to='/'>
          <div className="back">
          <ArrowBackOutlined/>
          Home
          </div>
          </Link>
          <ReactPlayer url={movie.video}  loop={true} width={"100%"} height={"100%"} style={{objectFit:"contain"}} playing={true} controls={true} />
      </div>
  );
};

export default Watch;
