import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import { Navbar, ProtectedRoute } from "./components";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {

  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
