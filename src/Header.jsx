import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './Requests';
import { IoPlayCircle } from "react-icons/io5";
import { IoIosInformation } from "react-icons/io";

import { FiPlus } from "react-icons/fi";



function Header() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    // Initial fetch
    fetchData();

    // Set interval to fetch a new movie every 10 seconds
    const intervalId = setInterval(fetchData, 8000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <div className='p-5 relative'>
      <div
        className='rounded-xl w-full h-96 md:h-[500px] flex items-center justify-center md:justify-start md:pl-20 relative'
        style={{
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        }}
      >
        {/* Overlay div for darkening the image */}
        <div className='absolute inset-0 bg-black opacity-40 rounded-xl'></div>

        <div className='relative z-10 '>
          <h1 className='text-2xl md:text-5xl font-bold text-white text-center mb-20'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className=' text-white flex flex-row  items-center justify-center md:absolute'>
          <IoPlayCircle className=' rounded-full text-7xl mr-20 hover:text-[#1399ff]' />
          <FiPlus className=' rounded-full text-5xl bg-gray-500 opacity-60 hover:opacity-100 mr-3'/>
          <IoIosInformation className='rounded-full text-5xl bg-gray-500 opacity-60 hover:opacity-100 ml-3' />

          </div>
          {/* <p className='text-[#1399ff] w-1/2'>{truncate(movie?.overview, 150)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
