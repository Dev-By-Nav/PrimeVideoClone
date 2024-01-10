import React, { useEffect, useState } from 'react';
import axios from './axios';

function Row({ title, fetchUrl, yellow_title = false, LargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      <h2
        className={`${
          yellow_title ? ' text-yellow-500' : 'text-white'
        } font-bold  text-lg pl-5`}
      >
        {title}
      </h2>

      <div className="flex flex-row overflow-y-hidden overflow-x-scroll no-scrollbar pl-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="mr-4 my-6 rounded-lg hover:scale-110 hover:shadow-[#1399ff] shadow-md"
            onMouseEnter={() => setHoveredMovie(movie)}
            onMouseLeave={() => setHoveredMovie(null)}
            style={{
              backgroundImage: `url(${base_url}${movie.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: LargeRow ? '200px' : '150px',
              height: LargeRow ? '300px' : '200px',
            }}
          >
            {hoveredMovie && hoveredMovie.id === movie.id && (
              <img
                src={`${base_url}${movie.poster_path}`}
                alt=""
                style={{
                  width: LargeRow ? '200px' : '150px',
                  height: LargeRow ? '300px' : '200px',
                  opacity: 0.7,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
