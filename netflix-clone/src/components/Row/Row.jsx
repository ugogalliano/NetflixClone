import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import requests from "../../Request";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Movie from "../Movie/Movie";


const Row = ({ fetchURL, title }) => {


  const [movies, setMovies] = useState([]);
  const refRow = useRef();



  //Scroll
  const scrollHandler = (direction) => {
    if (direction === "left") {
      refRow.current.scrollLeft = refRow.current.scrollLeft - 500;
    } else {
      refRow.current.scrollLeft = refRow.current.scrollLeft + 500;
    }
  };


  //Get Data
  useEffect(() => {
    axios
      .get(requests[fetchURL])
      .then((response) => setMovies(response.data.results));
  }, [fetchURL]);




  return (
    <div className="w-full relative  p-4  my-4">
      <div className=" text-xl mb-2 text-white font-semibold">{title}</div>
      <div
        className="flex gap-5 w-full flex-nowrap  overflow-auto scroll-smooth"
        ref={refRow}
      >
        {movies.length !== 0 &&
          movies.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
      </div>
      <div
        className="absolute  text-4xl  cursor-pointer opacity-50 hover:opacity-100  left-0 top-[50%] shadow-2xl  text-white bg-gray-500  hover:text-gray-500 hover:bg-white transition-all ease-in-out duration-400 rounded-full p-1"
        onClick={() => {
          scrollHandler("left");
        }}
      >
        <AiOutlineArrowLeft />
      </div>

      <div
        className="absolute  text-4xl cursor-pointer opacity-50 hover:opacity-100  right-0 top-[50%] shadow-2xl  text-white bg-gray-500  hover:text-gray-500 hover:bg-white transition-all ease-in-out duration-400 rounded-full p-1"
        onClick={() => {
          scrollHandler("rigth");
        }}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Row;
