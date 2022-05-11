//react
import React from 'react'

//assets
import backgroundImg from "../assets/background.png"

//components
import Movie from '../components/Movie/Movie'

//firebase
import { useMovies } from '../context/MoviesContext';

const Account = () => {

  const {savedMovies} = useMovies()

  return (
    <div className='w-full relative'>
      <div className='absolute h-[400px] w-full top-0 left-0 bg-black/50'>
      </div>
      <img src={backgroundImg} alt="background_Netflix" className="w-full max-h-[400px] object-cover" />
      <div className='text-white p-2 '>
        Saved Movies
      </div>
      <div className="w-full relative  p-4  my-4">
        <div
          className="flex gap-5 w-full flex-nowrap  overflow-auto scroll-smooth"

        >
          {savedMovies.length !== 0 &&
            savedMovies.map((movie, index) => (
              <Movie movie={movie} key={index}  />
            ))}
        </div>

      </div>

    </div>
  )
}

export default Account