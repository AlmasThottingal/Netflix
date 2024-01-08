import React, { useEffect } from 'react'
import './Ban.css'
import instance from '../instance';
import { useState } from 'react';

function Ban({fetchUrl}) {
    // console.log(fetchUrl);
   const [movie,setMovie]=useState()
   const base_url = "https://image.tmdb.org/t/p/original/";
   
   const fetchdata = async () => {
     const {data}  = await instance.get(fetchUrl)
    //  console.log(data.results);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(movie)

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}
    >
      <div className="banner-content">
        <h1 >{movie?.name}</h1>
        <button className='btn btn-danger mt-3'>Play <i class="fa-solid fa-play"></i></button>
        <button className='btn border-white mt-3 ms-3 more'>More info <i class="fa-solid fa-caret-down"></i></button>
        <h2>{movie?.overview?.slice(0,200)}....</h2>
      </div>
      
    </div>
  )
}

export default Ban;