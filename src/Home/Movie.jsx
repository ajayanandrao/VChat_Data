import React, { useEffect, useState } from 'react'
import "./Movie.scss";
import { useParams } from 'react-router-dom';
import movie from "./../movie.json";

const Movie = () => {
    const { id } = useParams();

    const [movieList, setMovieList] = useState(null);
    useEffect(() => {
        const unsub = () => {
            const list = movie.find((item) => item.id == id);
            try {
                if (list) {
                    setMovieList(list);
                } else {
                    console.log("movie list not found");
                }
            }
            catch {
                console.log("movie list not found");
            }
        }
        return unsub;
    }, [id]);


    return (
        <div className='movie-container'>
            {movieList ? (
                <div>
                    <div className="movie-tailer"></div>
                    <div className='movei-detail-div'>
                        <div className="movie-title">{movieList.name}</div>
                        <div className="movie-company">{movieList.company}</div>
                        <div className="movie-company">Language: {movieList.language}</div>
                    </div>

                    <div className="movie-screenShot-center">
                        <div className="movie-screen-shots-grid">
                            <div className='movie-screenShots-img'>{movieList.s1}</div>
                            <div className='movie-screenShots-img'>{movieList.s2}</div>
                            <div className='movie-screenShots-img'>{movieList.s3}</div>
                            <div className='movie-screenShots-img'>{movieList.s4}</div>
                        </div>
                    </div>
                    <div className="download-btn">Download</div>

                </div>
            ) : "loading..."}

        </div>
    )
}

export default Movie