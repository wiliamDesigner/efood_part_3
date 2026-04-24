import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./Pages/Perfil/Perfil";
import Home from "./Pages/Home/Home";

function AppRoutes(){
    return(

       <BrowserRouter>
       
       <Routes>
       
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Perfil/:id" element={<Perfil/>} ></Route>
       
       </Routes>
       
       </BrowserRouter>

    );
}

export default AppRoutes;