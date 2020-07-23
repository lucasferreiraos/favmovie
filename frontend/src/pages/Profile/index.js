import React, { useState } from 'react';
import api from '../../services/api';


export default function Profile() {
    const [movieName, setMovieName] = useState();
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();

        try {
            const response = await api.get(movieName);
            console.log(response.data);
            setMovies(response.data);
        } catch (error) {
            alert("tururu :/")
        }
    }

    return (
        <div className="search">
            <form>
                <input 
                    placeholder="Nome do filme"
                    type="text"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                />
            </form>
            <button onClick={searchMovie} type="submit">Procurar</button>
        
            <ul>
               {movies.map(movie => (
                   <li key={movie.show.id}>
                       <strong>{movie.show.name}</strong>
                        <h4>{movie.show.runtime} min</h4>
                   </li>
               ))} 
            </ul>
        </div>
    );
}