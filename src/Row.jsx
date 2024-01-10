import React, { useEffect, useState } from 'react';
import axios from './axios';

function Row({ title, fetchUrl, yellow_title = false, LargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [isLargeRow, setIsLargeRow] = useState(false);

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
        <div
            onMouseEnter={() => setIsLargeRow(true)}
            onMouseLeave={() => setIsLargeRow(false)}
        >
            <h2
                className={`${yellow_title ? ' text-yellow-500' : 'text-white'} font-bold  text-lg pl-5`}
            >
                {title}
            </h2>

            <div
                className={`${
                    isLargeRow ? 'h-96 w-auto ' : ' h-40 w-auto'
                } flex flex-row overflow-y-hidden overflow-x-scroll no-scrollbar pl-5`}
            >
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}

                        alt=""
                        className='mr-4 my-6 rounded-lg hover:scale-110 hover:shadow-[#1399ff] shadow-md'
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
