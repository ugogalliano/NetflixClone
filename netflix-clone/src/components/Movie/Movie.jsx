import React, { useEffect, useState } from 'react'

//components
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


import { useAuth } from '../../context/AuthContext'
import { useMovies } from '../../context/MoviesContext'


import {  doc } from 'firebase/firestore'
import { db } from '../../firebase'

const Movie = ({ movie }) => {

  const [saved, setSaved] = useState(false)

  const { user } = useAuth()
  const { savedMovies, addMovie, removeSavedMovie } = useMovies()


  const movieId = doc(db, "users", `${user?.email}`)


  useEffect(() => {

    if (user) {
      const isSaved = savedMovies.find((saveMovie) => saveMovie.id === movie.id)
      if (isSaved) setSaved(true)
    }
  }, [movie.id, savedMovies, user])



  const saveMovie = async () => {

    setSaved(true)
    const data = {
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path
    }

    addMovie(movieId, data)

  }


  const removeMovie = async () => {

    setSaved(false)
    removeSavedMovie(movieId, movie.id)

  }




  return (
    <div className="w-[270px]  relative cursor-pointer "
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie.title}
        className="min-w-[270px]"
      />

      <div className=" absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100  duration-300   flex items-center justify-center w-full h-full  ">
        {user && <div className=" absolute top-2 left-2  text-xl  text-white">
          {!saved ? <AiOutlineHeart onClick={saveMovie} /> : <AiFillHeart onClick={removeMovie} />}
        </div>}

        <div className=" text-lg  text-white" >
          {movie.title}
        </div>
      </div>
    </div>
  )
}

export default Movie