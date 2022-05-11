import React from "react";

import { useEffect } from "react";

//firebase
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

//components
import { Main, Row } from "../components";

//context
import { useAuth } from "../context/AuthContext";
import { useMovies } from "../context/MoviesContext";

const Home = () => {

  const { user } = useAuth()
  const { loadSavedMovies } = useMovies()

  useEffect(() => {

    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        loadSavedMovies(doc.data().savedShows)
      });
    }

  }, [user,loadSavedMovies])




  return (
    <React.Fragment>
      <Main />
      <Row fetchURL={"requestUpcoming"} title="Upcoming" />
      <Row fetchURL={"requestPopular"} title="Popular" />
      <Row fetchURL={"requestTrending"} title="Trending" />
      <Row fetchURL={"requestTopRated"} title="Top Rated" />
      <Row fetchURL={"requestHorror"} title="Horror" />


    </React.Fragment>
  );
};

export default Home;
