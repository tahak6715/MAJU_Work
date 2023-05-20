
import { BrowserRouter } from "react-router-dom";


import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Main from "../screens/Main";
import Login from "../screens/Login";
import Admin from "../screens/Admin/Admin";
import Resturant from "../screens/Admin/Admin";
import Restaurants from "../screens/Restaurants";
import SignUp from "../screens/SignUp";
import ResturantLogins from "../screens/Admin/AdminLogin";


function Routing(){
    
    return(
        <>
        
        <BrowserRouter>
        <Routes>
            
            <Route path="/main/*" element={<Main/>}/>
            <Route path="/signup" element={<Login/>}/>
            <Route path="/login" element={<SignUp/>}/>
            
            <Route path="/admin" element={<Admin/>}/>
                <Route path="/restaurant" element={<Restaurants/>}/>
                <Route path="/adminlogin" element={<ResturantLogins/>}/>
            

            {/* <Route path="/*" element={<DashboardScreen/>}/> */}
        </Routes>
        
        </BrowserRouter>
        
        </>
    );
}

export default Routing;