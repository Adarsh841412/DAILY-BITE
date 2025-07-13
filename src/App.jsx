import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./componets/Register";
import Login from "./componets/Login";
import NotFound from "./componets/notFound";
import { Track } from "./componets/Track";

import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
function App() {


  const[loggedUser,setLoggedUser]=useState(null);

useEffect(()=>{
  console.log("conetext-obj",loggedUser)
})


  return (
    <>
<UserContext.Provider  value={{loggedUser,setLoggedUser}} >


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registar" element={<Register/>}/>
          <Route path="/track" element={<Track/>}/>

           <Route path="*" element={<NotFound/>}/>


        </Routes>
      </BrowserRouter>

      </UserContext.Provider>
    </>
  );
}

export default App;
