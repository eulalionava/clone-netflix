import React, { useEffect, useState } from 'react';
import { instance } from '../helpers/axios';
import { request } from '../helpers/request';
import './Banner.css';

export const Banner = ()=>{

    const [ movie, setMovies ] = useState([]);

    useEffect( ()=>{
        async function fetchData(){
            const respuesta = await instance.get(request.fetchTopRated);
            setMovies(
                respuesta.data.results[
                    Math.floor(Math.random() * respuesta.data.results.length-1)
                ]
            );
            return respuesta;
        }
        fetchData();
    },[]);
    console.log(movie);

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }

    return(
        <header 
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h1 className="banner__description">
                    { truncate(movie?.overview,150) }
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}