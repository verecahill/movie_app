import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Geners">
          {genres.map((genre, index) => {
            return <span className="Movie_Genre" key={index}>{genre}</span>
          })}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propType = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

MoviePoster.propType = {
  poster: PropTypes.string.isRequired
};

export default Movie;
