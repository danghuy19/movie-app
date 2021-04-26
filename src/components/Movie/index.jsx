import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.scss";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

Movie.propTypes = {
    
};

function Movie(props) {
    const { poster_path, title, vote_average, overview } = props.data;
    const setVoteClass = (vote_average) => {
        if (vote_average >= 8) {
            return "green";
        } else if (vote_average > 4 || vote_average < 8) {
            return "orange";
        } else {
            return "red";
        }
    }
    return (
        <div className="movie">
            <img src={IMAGE_API + poster_path} alt={title}/>
            <div className="movie__info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie__overview">
                <h3>Over view:</h3>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;