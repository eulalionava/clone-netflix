import { instance } from '../helpers/axios';

import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title,fetchUrl,isLargeRow })=>{

    const [ movies,setMovies ] = useState([]);
    const [ trailerUrl,setTrailerUrl ]= useState("");

    useEffect( ()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height:"390",
        with:"100%",
        playerVars:{
            autoplay:1
        }
    }

    const handClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            console.log(movie.id);
            // movieTrailer(movie?.name)
            // .then( (url)=>{
            //     const urlParams = new URLSearchParams( new URL(url).search);
            //     setTrailerUrl( urlParams.get('v') );
            // })
            // .catch( (error) => console.log(error));
        }
    };

    return(
        <div className="row">
            <h2>{ title }</h2>
            <div className="row__posters">
                { 
                    movies.map( (movie)=>(
                        <img
                        key={ movie.id}
                        onClick={()=> handClick(movie) }
                        className={`row__poster ${ isLargeRow && 'row__posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name }/>
                    ))
                }
            </div>
            { trailerUrl && <YouTube videoId={ trailerUrl } opts={ opts }/> }
        </div>
    )
}