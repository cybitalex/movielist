import { React, useState, useEffect, createContext } from 'react';


export default function MoviesList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/movies')
            .then((result) => result.json())
            .then((data) => setMovies(data))
    }, [])

    return (
        <>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>Movie: {movie.title} Genre: {movie.genre} Release-Date: {movie.release_date}</li>
                    )
                })}
            </ul>
        </>
    )
}
