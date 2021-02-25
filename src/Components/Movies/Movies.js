import React from 'react'
import tmdbApi from "../../Services/tmdb-api";
import './Movies.css'
import noPosterAvailable from "./no-poster-available.jpg"

export default class Movies extends React.Component{
    api = new tmdbApi();

    state = {
        movies: []
    }

    constructor(props) {
        super(props);
        this.updateMovies();
    }

    onMovieLoaded = (movie) => {
        this.setState((state) =>{
            return {movies: [...state.movies, movie]};
        })
    };

    updateMovies(){
        const availableID = [];
        for (let i = 0; i < 15; ++i){
            let id = 0;

            do {
                id = Math.floor(Math.random() * (550 - 0) + 0);
            } while(availableID.includes(id));

            this.api.getMovie(id).then((body) => {
                if(body.title){
                    this.onMovieLoaded(body);
                }
            });
        }
    }

    render(){
        const elements = this.state.movies.map(({title,posterPath,releaseDate, overview,id}) => {
            const pathToImage = posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : noPosterAvailable;
            return (
                <div className="col-lg-4 col-md-6 movies-item-wrap">
                    <div className="list-movies-item" key={id}>
                        <div className="movie-item d-flex-row justify-content-between">
                            <div className="poster">
                                <img src={pathToImage} alt=""/>
                            </div>
                            <div className="title">
                                {title}
                            </div>
                            <div className="release-date">
                                {releaseDate}
                            </div>
                            <div className="overview d-flex-row">
                                {overview}
                            </div>
                        </div>
                    </div>
                </div>

            );
        })

        return(
            <div className="movies">
                <h2>Список фильмов</h2>
                <div className="row">
                    {elements}
                </div>
            </div>
        );
    }
}
