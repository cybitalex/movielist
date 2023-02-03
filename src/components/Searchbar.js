import React, {useState} from 'react'
import movies from './Movieslist';

export default function SearchBar() {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
    movies.filter((movie) => {
        return movie.title.match(searchInput);
    }) 
    }
    return (
        <>
            <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        </>
    )
};
