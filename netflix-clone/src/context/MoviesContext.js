import React, { useCallback, useContext, useState } from "react";
import { updateDoc, arrayUnion } from "firebase/firestore";

const MoviesContext = React.createContext();

export const MoviesContextProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);

  const loadSavedMovies = useCallback((movies) => {
    setSavedMovies(movies);
  },[]);

  const removeSavedMovie = async(movieId,idMovie) => {

    const result = savedMovies.filter((item)=>item.id!==idMovie)
    await updateDoc(movieId, {
        savedShows: result,
      });

  };

  const addMovie = async (movieId, data) => {
    savedMovies.push(data);
    await updateDoc(movieId, {
      savedShows: arrayUnion(data),
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        savedMovies,
        setSavedMovies,
        loadSavedMovies,
        addMovie,
        removeSavedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
