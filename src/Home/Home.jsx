import React from 'react'
import "./Home.scss";
import movie from "./../movie.json";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className="card-grid-center">
                <div className='card-main-div'>
                    {movie.map((item) => {
                        return (
                            <>
                                <Link to={`movie${item.id}`} className='movie-card link'>
                                    <div className="movie-card-name-div">
                                        <div className="movie-name">
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Home