import React,{useContext} from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";
import Login from "../Pages/Auth/Login";

// EMPLOYEE
import DashboardEmployee from "../Pages/Employee/DashboardEmployee";

const AppRouter = () => {

const user = useContext(AuthContext)
console.log(user)

return(
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<DashboardEmployee/>} />
    </Routes>
    )
}

export default AppRouter;