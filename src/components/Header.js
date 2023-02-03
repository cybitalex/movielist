import {React, useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MoviesList from './Movieslist';
import App from '../App';


export default function Header() {


    return (
        <>
        
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/movies">
                            Movies
                            </Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/movies" element={<MoviesList />} />
                </Routes>
            </Router>
        </>
    )
}