import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./componets/Register";
import Login from "./componets/Login";
import NotFound from "./componets/notFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registar" element={<Register/>}/>
           <Route path="*" element={<NotFound/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
