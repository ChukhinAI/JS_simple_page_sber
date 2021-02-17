import React from 'react'
import tmdbApi from "../../Services/tmdb-api";
export default class Movies extends React.Component{
    api = new tmdbApi();

    state = {
        movies: [],
    }

    constructor(props) {
        super(props);
        this.updateMovies();
        //this.updateMovies(); // net
    }

    onMovieLoaded = (movie) => {
        this.setState(()=>{

            this.state.movies.push(movie);
        } );
    };

    updateMovies(){
        for (let i = 0; i < 15; ++i){
            const id = Math.floor(Math.random() * (550 - 100) + 100);

            this.api.getMovie(id).then(this.onMovieLoaded);

        }
    }

    ///*
    setElements = function () {
        this.state.movies.map(({title}) => {
            if (title != undefined) // hotfix пустых элементов с undefined title
                return (
                    //<li className="list-group-item">
                    //{title}
                    title
                    // </li>
                );
        })
    }

    hui()
    {
        console.log("in hui");
        let i = this.setElements();
        console.log(i);
        console.log(this.setElements());
        console.log("end hui");
    }

    hui2()
    {
        console.log("in hui2");
        /*
                <li className="list-group-item">
                {title}
                title
                </li>
        */
        console.log("keys = ");
        console.log(this.state.movies); // есть полный список
        let arr = Array.from(this.state.movies);
        let arr2;

        console.log("arr.pop");

        /*
        this.state.movies.map(({title}, arr2) => {
            console.log("in hui2 func"); // не отрабатывает
            console.log(title);

            if (title != undefined) // hotfix пустых элементов с undefined title
                arr2.push = (
                    <li className="list-group-item">
                    {title}
                    title
                    </li>
                );
        })

         */

        console.log(arr);
        //console.log(arr.pop());
        //console.log(this.state.movies[Symbol.iterator]);



        //for (let i = 0; i < arr.length; i++)
        for (let i of this.state.movies)
        {
            console.log(i + " = " + i);
        }
        console.log("after for");



        this.state.movies.map(({title}) => {
            console.log("in hui2 func");
            console.log(title);
            if (title != undefined) // hotfix пустых элементов с undefined title
                return (
                    //<li className="list-group-item">
                    //{title}
                    title
                    // </li>
                );
        })
    }

    //*/

    render(){
        /*
                let h = this.hui2();
                let h2 = this.setElements();
                console.log("hui in render = ");
                console.log(h);
                console.log(h2);

                console.log("in render 1");
                console.log("0 is ");

                console.log(this.state.movies);

         */
        ///*
        const elements = this.state.movies.map(({title}) => {
            console.log("in elements");
            if (title != undefined) { // hotfix пустых элементов с undefined title
                console.log("not undef");
                return (
                    <li className="list-group-item">
                        {title}
                    </li>
                );
            }
        })
        //*/

        /*
        let listElem = this.state.movies.map(({title}) => {
            if (title != undefined) // hotfix пустых элементов с undefined title
                return (
                    //<li className="list-group-item">
                        {title}
                    //</li>
                );
        })

         */

        console.log("typeof = " + typeof(this.state.movies.map));
        console.log("in render 2");
        console.log(elements); // пустые на первом проходе
        console.log("in render 3");
        //console.log(setElements); // пустые на первом проходе

        let elementsCopy;
        /*
        for (let tt of this.state.movies.values())
        {
            if (tt != undefined) // hotfix пустых элементов с undefined title
                //elementsCopy = this.state.movies;
                //console.log("typeof = " + typeof(this.state.movies));
        }
        */

        //this.render();
        return(

            <div className="movies">
                <h2>Список фильмов</h2>

                <ul className="list-group d-flex-row">
                    {elements}
                </ul>
            </div>
        );
    }
}